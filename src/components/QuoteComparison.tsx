import { useState } from 'react';

const initial = ['3000','150','4800','50','24'];
const number = new Intl.NumberFormat('en', {maximumFractionDigits:2});
export default function QuoteComparison() {
  const [values, setValues] = useState(initial);
  function field(i:number,label:string,months=false) {
    return <label>{label}<input type="number" inputMode={months?'numeric':'decimal'} min={months?1:0} max={months?120:1e9} step={months?'1':'0.01'} value={values[i]}
      onChange={e=>{const next=e.currentTarget.value;setValues(old=>old.map((v,n)=>n===i?next:v));}}/></label>;
  }
  const n=values.map(Number), months=n[4];
  const valid=values.every(v=>v.trim()!=='') && n.every(Number.isFinite) && n.slice(0,4).every(v=>v>=0 && v<=1e9 && Math.abs(v*100-Math.round(v*100))<0.0001) && Number.isInteger(months) && months>=1 && months<=120;
  return <section className="quote-tool" id="quote-comparison" tabIndex={-1} aria-labelledby="quote-title">
    <p className="eyebrow">Project worksheet</p><h2 id="quote-title">Compare the cost of two website quotes</h2>
    <p>Use the same currency and scope for both. Total cost over the period is the upfront fee plus the monthly fee multiplied by the number of months.</p>
    <p>Illustrative figures, not studio prices: 3,000 upfront plus 150 per month and 4,800 upfront plus 50 per month both cost 5,700 at month 18. Before then A costs less; after then B costs less.</p>
    <div className="quote-inputs">
      <div className="quote-pair">{['A','B'].map((q,i)=><fieldset key={q}><legend>Quote {q}</legend>{field(i*2,'Upfront fee')}{field(i*2+1,'Monthly fee')}</fieldset>)}</div>
      {field(4,'Months to compare (1–120)',true)}
      <p role="status" aria-live="polite" aria-atomic="true">{valid ? <>Over {months} {months===1?'month':'months'}: <strong>A costs {number.format(n[0]+months*n[1])}</strong> · <strong>B costs {number.format(n[2]+months*n[3])}</strong>.</> : 'Enter all four fees as non-negative amounts with up to two decimals (maximum one billion), and a whole number of months from 1 to 120.'}</p>
    </div>
    <p>Check whether hosting, support, content migration and taxes are included before deciding. A lower total does not make two different scopes equivalent.</p>
  </section>;
}
