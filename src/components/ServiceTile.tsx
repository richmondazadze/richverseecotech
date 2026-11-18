import { Link } from 'react-router-dom';
import { practice } from '../data/practice';
import type { Service } from '../data/site';
import Icon from './Icon';

export default function ServiceTile({ service, headingLevel = 3 }: { service: Service; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3';
  const item = practice[service.slug];
  return <Link to={'/services/' + service.slug} className="service-tile" data-scroll-section="capability" aria-label={'Explore ' + service.name}>
    <img className="cap-media" data-enter="index" src={'/brand/practices/'+service.slug+'.svg'} width="144" height="100" alt="" loading="lazy"/>
    <div className="cap-title"><span className="cap-label">{item.specialty}</span><Heading className="service-name">{service.name}</Heading></div>
    <p className="service-desc">{item.indexCopy}</p>
    <span className="service-arrow"><Icon name="arrow-right" size={22}/></span>
  </Link>;
}
