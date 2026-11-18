import { demandWh, practice } from '../data/practice';

function WebFlow() {
  return <g>
    <g className="diagram-wire"><path d="M77 78h93m66 0h71"/><path className="diagram-dash" d="M199 104v26q0 8-8 8H68q-8 0-8-8v-17"/><path d="m55 120 5-7 5 7"/></g>
    {[27,166,303].map(x=><g key={x} data-figure-stage><rect className="diagram-fill" x={x} y="52" width="69" height="51" rx="3"/><path className="diagram-wire" d={`M${x} 63h69`}/><circle className="diagram-dot" cx={x+8} cy="58" r="1.7"/></g>)}
    <path className="diagram-signal" d="M38 75h29m-29 9h45M181 75h22m-22 9h11m14 0 4 4 8-12m101 4 8 8 17-17"/>
    <g className="diagram-label" textAnchor="middle"><text x="62" y="36">Draft</text><text x="200" y="36">Validate</text><text x="337" y="36">Receipt</text></g>
    <text className="diagram-small" x="131" y="164" textAnchor="middle">Correct &amp; retry</text>
  </g>;
}
function ChannelMap() {
  return <g>
    <g className="diagram-wire"><path d="M99 35c39 0 46 51 76 51M99 86h76M99 137c39 0 46-51 76-51M211 86h109"/></g>
    {[35,86,137].map(y=><circle key={y} className="diagram-dot" cx="99" cy={y} r="3"/>)}
    <g className="diagram-label"><text x="17" y="40">Search</text><text x="17" y="91">Email</text><text x="17" y="142">Referral</text></g>
    <g className="diagram-fill"><rect data-figure-stage x="173" y="62" width="52" height="49" rx="3"/><circle data-figure-stage cx="338" cy="86" r="24"/></g>
    <g className="diagram-signal"><path d="M173 74h52m-41 10h27m-27 8h17m66-11 6 5-6 5m57-5 7 7 13-16"/></g>
    <g className="diagram-label" textAnchor="middle"><text x="199" y="139">Landing page</text><text x="338" y="139">Lead review</text></g>
  </g>;
}
function LoadSchedule() {
  return <g>
    {[144,201,258,315,372].map((x,i)=><g key={x}><path className="diagram-wire diagram-dash" d={`M${x} 42v104`}/><text className="diagram-small" x={x} y="29" textAnchor="middle">{i} h</text></g>)}
    <g className="diagram-label"><text x="17" y="69">Lighting</text><text x="17" y="105">Network</text><text x="17" y="141">Printer</text></g>
    <rect data-figure-stage x="144" y="55" width="228" height="15" className="diagram-bar"/><rect data-figure-stage x="144" y="91" width="228" height="15" className="diagram-bar-secondary"/>
    <path className="diagram-wire diagram-dash" d="M144 137h37"/><text x="194" y="142" className="diagram-small">Deferred</text>
  </g>;
}
const diagrams: Record<string, {graphic:typeof WebFlow; type:string}> = {
  'web-development':{graphic:WebFlow,type:'Task flow'}, 'digital-marketing':{graphic:ChannelMap,type:'Attribution map'},
  'renewable-energy':{graphic:LoadSchedule,type:'Load schedule'},
};
export default function PracticeFigure({slug}:{slug:string}) {
  const item=practice[slug], sample=item.sample;
  if (sample.kind==='record') return <figure className="practice-figure">
    <div className="plate-label"><span>{item.plate}</span><span>Illustrative record</span></div>
    <div className="record-preview">
      <div className="plate-result"><strong>{sample.status}</strong><span>Former team member · Workspace access</span></div>
      <dl>{[['Finding','Access retained'],['Owner action','Access removed'],['Independent check','Roster verified']].map(([label,value])=>
        <div key={label}><dt>{label}</dt><dd><i aria-hidden="true" data-figure-stage/>{value}</dd></div>)}</dl>
    </div><figcaption><span>{item.plateCaption}</span></figcaption>
  </figure>;
  const {graphic:Graphic,type}=diagrams[slug];
  return <figure className="practice-figure" data-depth-scene>
    <div className="plate-label"><span>{type}</span><span>{slug==='web-development'?'Studio project':'Worked example'}</span></div>
    {sample.kind==='load' && <div className="plate-result energy-result"><strong>{demandWh(sample)} Wh</strong><span>At the loads over {sample.hours} hours, before losses and reserve.</span></div>}
    <svg data-enter="plate" viewBox="0 0 400 180" aria-hidden="true" focusable="false"><g data-depth="diagram"><Graphic/></g></svg>
    <figcaption><strong>{item.plate}</strong><span>{item.plateCaption}</span></figcaption>
  </figure>;
}
