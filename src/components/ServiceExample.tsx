import { Link } from 'react-router-dom';
import { demandWh, type Practice } from '../data/practice';
import EnquiryProof from './EnquiryProof';
import Icon from './Icon';

type Props = { sample: Practice['sample']; contact: string };

export default function ServiceExample({ sample, contact }: Props) {
  switch (sample.kind) {
    case 'live':
      return <div className="live-evidence">
        <EnquiryProof action={<Link className="studio-link proof-action" to={contact}>Try the Web Development enquiry<Icon name="arrow-right" size={16}/></Link>}/>
        <div className="work-sample launch-checks"><h3>{sample.name}</h3>
          <dl>{sample.checks.map(([task,result])=><div key={task}><dt>{task}</dt><dd>{result}</dd></div>)}</dl>
        </div>
      </div>;
    case 'measurement': {
      const { sessions, qualified, unmatched } = sample;
      const rate = 100 * qualified / sessions;
      return <div className="work-sample campaign-sheet">
        <div className="sample-meta"><span>Illustrative campaign</span><span>{sample.period}</span></div>
        <h3>{sample.name}</h3>
        <dl className="campaign-metrics">
          <div><dt>Eligible sessions</dt><dd>{sessions}</dd></div>
          <div><dt>Matched, qualified enquiries</dt><dd>{qualified}</dd></div>
          <div><dt>Qualified enquiry rate</dt><dd>{rate}%</dd></div>
        </dl>
        <p className="sample-note">{qualified} ÷ {sessions} = {rate}%. Another {unmatched} qualified enquiries had no matching session, so they’re recorded separately.</p>
        <div className="decision-line"><strong>Spending decision</strong><p>Review the matched enquiries with sales before increasing spend. Did they lead to useful conversations?</p></div>
      </div>;
    }
    case 'record':
      return <div className="work-sample closure-sheet">
        <div className="sample-meta"><span>Illustrative record</span><span>Access control</span></div>
        <h3>{sample.name}</h3>
        <dl className="closure-fields">
          <div><dt>Finding</dt><dd>{sample.finding}</dd></div>
          <div><dt>Accountable owner</dt><dd>{sample.owner}</dd></div>
          <div><dt>Independent check</dt><dd>{sample.check}</dd></div>
          <div><dt>Status</dt><dd><strong className="closure-status"><Icon name="check" size={17}/>{sample.status}</strong> · Roster verified</dd></div>
        </dl>
      </div>;
    case 'load': {
      const total = demandWh(sample);
      return <div className="work-sample load-sheet">
        <div className="sample-meta"><span>Illustrative worksheet</span><span>{sample.hours}-hour outage</span></div>
        <h3 className="load-result"><strong>{total} Wh</strong> at the loads</h3>
        <p className="load-basis">Before losses and reserve.</p>
        <table><caption>{sample.name}</caption><thead><tr><th scope="col">Load</th><th scope="col">Energy needed</th></tr></thead>
          <tbody>{sample.loads.map(({name,watts})=><tr key={name}><th scope="row">{name}</th><td>{watts} W × {sample.hours} h = <strong>{watts * sample.hours} Wh</strong></td></tr>)}</tbody>
        </table>
        <div className="decision-line"><strong>Before choosing a battery</strong><p>This is energy demand, not battery capacity. Check efficiency, usable capacity and reserve; check peak power and starting surges before sizing the inverter.</p></div>
      </div>;
    }
  }
}
