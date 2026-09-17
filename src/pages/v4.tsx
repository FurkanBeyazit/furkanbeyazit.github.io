import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useProfile from '@site/src/data/useProfile';
import type {Project} from '@site/src/data/types';
import {Button, MailIcon} from '@site/src/components/ui';
import styles from './v4.module.css';

function Study({project, index}: {project: Project; index: number}) {
  const src = useBaseUrl(project.image);
  return (
    <article className={styles.study}>
      <figure>
        <img src={src} alt={project.name} loading="lazy" />
      </figure>
      <div>
        <p className={styles.num}>{String(index + 1).padStart(2, '0')}</p>
        <h3>{project.name}</h3>
        <p>{project.summary}</p>
        <p className={styles.stack}>{project.stack.join(' · ')}</p>
      </div>
    </article>
  );
}

export default function V4() {
  const p = useProfile();
  const {hero, labels} = p;
  const [first, ...rest] = hero.name.split(' ');
  return (
    <Layout title={`V4 · ${hero.title}`} description={hero.tagline}>
      <main className={styles.page}>
        <header className={styles.masthead}>
          <p className={styles.kicker}>
            {hero.title} — {hero.location}
          </p>
          <h1 className={styles.name}>
            {first} <em>{rest.join(' ')}</em>
          </h1>
          <div className={styles.lede}>
            <p>{hero.tagline}</p>
            <div className={styles.meta}>
              <a href={hero.links.github} target="_blank" rel="noreferrer">
                github.com/FurkanBeyazit
              </a>
              <br />
              <a href={hero.links.linkedin} target="_blank" rel="noreferrer">
                linkedin.com/in/furkanbyagiz
              </a>
              <br />
              <a href={`mailto:${hero.links.email}`}>{hero.links.email}</a>
            </div>
          </div>
        </header>

        <section id="projects">
          <h2 className={styles.h2}>{labels.projects}</h2>
          <p className={styles.sub}>{labels.projectsSub}</p>
          <div>
            {p.projects.map((pr, i) => (
              <Study key={pr.id} project={pr} index={i} />
            ))}
          </div>
        </section>

        <section id="earlier" style={{marginTop: '3rem'}}>
          <h2 className={styles.h2}>{labels.earlier}</h2>
          <div>
            {p.earlier.map((pr, i) => (
              <Study key={pr.id} project={pr} index={i} />
            ))}
          </div>
        </section>

        <section className={styles.cols}>
          <div>
            <p className={styles.colTitle}>{labels.experience}</p>
            <ul className={styles.plain}>
              {p.experience.map((e) => (
                <li key={e.org}>
                  <b>{e.org}</b> — {e.role}
                  <small>{e.period}</small>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={styles.colTitle}>
              {labels.education} · {labels.certs}
            </p>
            <ul className={styles.plain}>
              {p.education.map((e) => (
                <li key={e.org}>
                  <b>{e.org}</b> — {e.role}
                  <small>{e.period}</small>
                </li>
              ))}
              {p.certs.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className={styles.colTitle}>{labels.skills}</p>
            {p.skills.map((g) => (
              <p key={g.group} className={styles.skillLine}>
                <b>{g.group}:</b> {g.items.join(', ')}
              </p>
            ))}
          </div>
        </section>

        <footer className={styles.contact} id="contact">
          <h2 className={styles.h2}>{labels.contact}</h2>
          <Button href={`mailto:${hero.links.email}`}>
            <MailIcon /> {hero.links.email}
          </Button>
        </footer>
      </main>
    </Layout>
  );
}
