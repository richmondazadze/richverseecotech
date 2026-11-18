import Icon from './Icon';
import type { ReactNode } from 'react';

const steps = [
  { label: 'Web Development brief', image: 'service-choice', alt: 'Discuss your project button on the Web Development page' },
  { label: 'Project enquiry', image: 'enquiry-topic', alt: 'Enquiry topic already set to Web Development' },
];

export default function EnquiryProof({ action }: { action?: ReactNode }) {
  return <figure className="work-print enquiry-proof" data-scroll-section="project-plate">
    <div className="proof-heading"><span>Service to enquiry</span><Icon name="arrow-right" size={20}/></div>
    <ol className="proof-steps">{steps.map((step, i) =>
      <li key={step.image}><p><span>0{i + 1}</span>{step.label}</p>
        <div className="proof-control"><img src={'/work/'+step.image+'.webp'} width="520" height="128" loading="lazy" alt={step.alt}/></div>
      </li>)}</ol>
    <figcaption>The form carries the service name forward.{action}</figcaption>
  </figure>;
}
