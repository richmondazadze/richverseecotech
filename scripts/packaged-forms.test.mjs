import assert from 'node:assert/strict';
import { mkdtemp, rm } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { test } from 'node:test';
import { pathToFileURL } from 'node:url';

const require = createRequire(import.meta.url);
const { build } = require('@vercel/node');
// Use the file helpers from the same builder version that creates the lambda.
const { FileFsRef, download } = createRequire(require.resolve('@vercel/node'))('@vercel/build-utils');

for (const endpoint of ['contact', 'newsletter']) {
  test(`packaged /api/${endpoint} starts and validates requests without sending mail`, async () => {
    const entrypoint = `api/${endpoint}.ts`;
    const workPath = process.cwd();
    const dest = await mkdtemp(path.join(tmpdir(), 'richverse-function-'));
    try {
      const { output } = await build({
        entrypoint, workPath,
        files: { [entrypoint]: new FileFsRef({ fsPath: path.join(workPath, entrypoint) }) },
        // Dependencies already exist. Exercise the production packager without
        // installing them again or recursively starting the frontend build.
        config: { zeroConfig: true, projectSettings: { installCommand: '', buildCommand: 'node --version' } },
        considerBuildCommand: true,
        meta: { skipDownload: true },
      });
      await download(output.files, dest, {});
      const { default: handler } = await import(pathToFileURL(path.join(dest, output.handler)));
      for (const [method, expected] of [['GET', 405], ['POST', 400]]) {
        const response = { setHeader() {}, status(code) { this.code = code; return this; }, json() {} };
        await handler({ method, body: {} }, response);
        assert.equal(response.code, expected, method);
      }
    } finally {
      await rm(dest, { recursive: true, force: true });
    }
  });
}
