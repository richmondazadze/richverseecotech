import { Link } from 'react-router-dom';
import { services } from '../data/site';
import Icon from './Icon';

export default function PracticeCover() {
  return (
    <>
      <section
        className="practice-cover"
        aria-labelledby="cover-title"
        data-depth-scene
      >
        <div className="cover-art" aria-hidden="true">
          <div className="cover-lens">
            <picture>
              <source type="image/avif" sizes="(max-width: 700px) 100vw, 54vw" srcSet="/editorial/studio-practices-640.avif 640w, /editorial/studio-practices-800.avif 800w, /editorial/studio-practices-1024.avif 1024w, /editorial/studio-practices-1620.avif 1620w" />
            <img
              data-depth="cover"
              src="/editorial/studio-practices-1024.webp"
              srcSet="/editorial/studio-practices-640.webp 640w, /editorial/studio-practices-1024.webp 1024w, /editorial/studio-practices-1620.webp 1620w"
              sizes="(max-width: 700px) 100vw, 54vw"
              alt=""
              width="1620"
              height="1140"
              {...{ fetchpriority: 'high' }}
            />
            </picture>
          </div>
        </div>
        <div className="container cover-inner">
          <div className="cover-copy">
            <div className="cover-story">
              <p className="cover-kicker">
                <span aria-hidden="true" />{' '}
                Technology &amp; energy studio
              </p>
              <h1 id="cover-title">
                <span className="cover-line">
                  <span>
                    Get found online.
                  </span>
                </span>{' '}
                <span className="cover-line">
                  <em>Plan for outages.</em>
                </span>
              </h1>
              <p className="cover-deck">
                We build websites, measure campaigns, review security and plan backup power for essential equipment.
              </p>
            </div>
            <div className="cover-actions">
              <Link
                className="btn-primary"
                to="/contact"
              >
                Discuss your project
                <Icon name="arrow-right" size={18} />
              </Link>
              <Link
                className="studio-link"
                to="/services"
              >
                Compare services
                <Icon name="arrow-right" size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <nav className="practice-key" aria-label="Explore the four services">
        <div className="container">
          {services.map((service, i) => (
            <Link key={service.slug} to={'/services/' + service.slug}>
              <span className="key-number" aria-hidden="true">
                0{i + 1}
              </span>
              {service.name}
              <Icon name="arrow-right" size={15} />
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
