import { test } from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';

// Bundle the actual handlers against an in-memory provider. Never send real mail.
const handlers = {};
for (const name of ['contact', 'newsletter']) {
  const result = await build({ entryPoints: [`api/${name}.ts`], bundle: true, write: false, platform: 'node', format: 'esm', plugins: [{ name: 'fake-email', setup(b) {
    b.onResolve({ filter: /^resend$/ }, () => ({ path: 'resend', namespace: 'test' }));
    b.onLoad({ filter: /.*/, namespace: 'test' }, () => ({ contents: 'export class Resend { emails = {send: data => globalThis.__testMail(data)}; }' }));
  }}] });
  handlers[name] = (await import(`data:text/javascript;base64,${Buffer.from(result.outputFiles[0].text).toString('base64')}`)).default;
}
const valid = { name: 'Alex Example', email: 'alex@example.com', message: 'A new website.', subject: 'Web Development' };
async function invoke(name, body, send = async () => ({ data: { id: 'fake-id' }, error: null }), method = 'POST') {
  const messages = []; globalThis.__testMail = data => { messages.push(data); return send(data, messages.length); };
  const response = { code: 0, headers: {}, body: null, setHeader(k,v) { this.headers[k] = v; }, status(code) { this.code = code; return this; }, json(body) { this.body = body; return this; } };
  await handlers[name]({ method, body }, response);
  return { ...response, messages };
}
process.env.RESEND_API_KEY = 'test-only-placeholder';
test('contact rejects missing, wrong-type, whitespace, overlong and header-injection inputs', async () => {
  for (const body of [null, [], {}, { ...valid, name: '   ' }, { ...valid, email: {} }, { ...valid, message: 'x'.repeat(5001) }, { ...valid, subject: 'Hello\r\nInjected' }, { ...valid, website: 'bot' }]) {
    const result = await invoke('contact', body); assert.equal(result.code,400); assert.equal(result.messages.length,0);
  }
});
test('contact only confirms provider acceptance; preserves message as plain text', async () => {
  const result = await invoke('contact', { ...valid, message: '<script>example</script>\nDetails' });
  assert.equal(result.code,200); assert.equal(result.messages.length,2); assert.equal(result.messages[0].html,undefined); assert.match(result.messages[0].text, /<script>example<\/script>/); assert.equal(result.messages[0].replyTo, valid.email);
});
test('provider rejection and missing receipt never show success', async () => {
  for (const response of [{error:{message:'Rejected'},data:null}, {error:null,data:null}]) {
    assert.equal((await invoke('contact',valid,async()=>response)).code,502);
    assert.equal((await invoke('newsletter',{email:valid.email},async()=>response)).code,502);
  }
});
test('acknowledgement failure does not turn an accepted enquiry into a retry', async () => {
  const result = await invoke('contact',valid,async (_,number)=>{if(number===2) throw new Error('unavailable'); return {data:{id:'accepted'},error:null};});
  assert.equal(result.code,200);
});
test('newsletter validates input and acknowledges the existing signup-request workflow', async () => {
  for(const email of ['',{},'invalid','x'.repeat(255)+'@example.com']) assert.equal((await invoke('newsletter',{email})).code,400);
  const result=await invoke('newsletter',{email:valid.email}); assert.equal(result.code,200); assert.equal(result.messages.length,1); assert.equal(result.body.message,'Signup request received.');
});
test('accepted enquiry measurement uses only fixed service labels and excludes rejected deliveries', async () => {
  const entries = [], original = console.info;
  try {
    console.info = line => entries.push(JSON.parse(line));
    await invoke('contact',valid);
    await invoke('contact',{...valid,subject:'Private free-text detail'},async (_,n)=>{if(n===2)throw Error();return {data:{id:'accepted'}}});
    await invoke('contact',valid,async()=>({error:{message:'rejected'}}));
    await invoke('contact',{...valid,email:'bad'});
    assert.deepEqual(entries,[{event:'enquiry_accepted',service:'web-development'},{event:'enquiry_accepted',service:'general'}]);
  } finally { console.info = original; }
});
test('unconfigured delivery and unsupported methods fail clearly', async () => {
  delete process.env.RESEND_API_KEY;
  for(const name of ['contact','newsletter']) {
    assert.equal((await invoke(name,valid)).code,503);
    const result=await invoke(name,valid,undefined,'GET'); assert.equal(result.code,405); assert.equal(result.headers.Allow,'POST');
  }
});
