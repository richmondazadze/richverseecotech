import { cssVars, team } from '../data/site';
import SocialIcon from './SocialIcon';

export default function TeamGrid() {
  return (
    <div className="team-grid">
      {team.map((m, i) => (
        <div className="team-card reveal" key={m.name} style={cssVars({ '--d': `${(i % 4) * 70}ms` })}>
          <div className="team-avatar">
            <img
              src={m.avatar}
              alt={m.name}
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  m.name
                )}&background=4338ca&color=fff&size=200`;
              }}
            />
          </div>
          <h3 className="team-name">{m.name}</h3>
          <p className="team-role">{m.role}</p>
          <p className="team-bio">{m.bio}</p>
          {(m.linkedin || m.x) && (
            <div className="team-socials social-icons">
              {m.linkedin && (
                <a href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on LinkedIn`} className="social-icon-link">
                  <SocialIcon label="LinkedIn" />
                </a>
              )}
              {m.x && (
                <a href={m.x} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on X`} className="social-icon-link">
                  <SocialIcon label="X" />
                </a>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
