import { team } from '../data/site';
import Icon from './Icon';

type Member = typeof team[number];
export function ProfileLinks({ member }: { member: Member }) {
  return <div className="directory-links">{[['LinkedIn',member.linkedin],['X',member.x]].map(([label,url]) => url &&
    <a key={label} href={url} target="_blank" rel="noopener noreferrer" aria-label={member.name+' on '+label}>{label}<Icon name="arrow-up-right" size={16}/></a>)}</div>;
}
export default function TeamGrid({ members }: { members: Member[] }) {
  return <ul className="studio-directory">{members.map(m=>
    <li key={m.name}>
      <div><h3 className="directory-name" data-enter="detail">{m.name}</h3><p className="directory-role">{m.role}</p></div>
      <p className="directory-bio">{m.bio}</p><ProfileLinks member={m}/>
    </li>)}</ul>;
}
