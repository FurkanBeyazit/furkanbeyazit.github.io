import {Fragment} from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useProfile from '@site/src/data/useProfile';
import type {Project} from '@site/src/data/types';
import styles from './v3.module.css';

function Entry({project}: {project: Project}) {
  const src = useBaseUrl(project.image);
  return (
    <div className={styles.entry}>
      <img src={src} alt={project.name} loading="lazy" />
      <div>
        <h3>{project.name}</h3>
        <p>{project.summary}</p>
        <div className={styles.tags}>
          {project.stack.map((s) => (
            <span key={s} className={styles.tag}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function V3() {
  const p = useProfile();
  const {hero, labels} = p;
  return (
    <Layout title={`V3 · ${hero.title}`} description={hero.tagline}>
      <main className={styles.term}>
        <div className={styles.window}>
          <div className={styles.bar}>
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
            <em>furkan@seoul — zsh</em>
          </div>
          <div className={styles.body}>
            <p className={styles.prompt}>whoami</p>
            <p className={styles.h1}>{hero.name}</p>
            <p className={styles.out}>
              <span className={styles.key}>{hero.title}</span> <span className={styles.dim}>· {hero.location}</span>
            </p>

            <p className={styles.prompt}>cat about.md</p>
            <p className={styles.out}>{hero.tagline}</p>

            <p className={styles.prompt}>ls projects/danusys</p>
            <p className={`${styles.out} ${styles.dim}`}>{labels.projectsSub}</p>
            <div className={styles.file}>
              {p.projects.map((pr) => (
                <Entry key={pr.id} project={pr} />
              ))}
            </div>

            <p className={styles.prompt}>ls projects/earlier</p>
            <div className={styles.file}>
              {p.earlier.map((pr) => (
                <Entry key={pr.id} project={pr} />
              ))}
            </div>

            <p className={styles.prompt}>cat skills.toml</p>
            <div className={styles.table}>
              {p.skills.map((g) => (
                <Fragment key={g.group}>
                  <span className={styles.key}>
                    {g.group.toLowerCase().replace(/\s+/g, '_')}
                  </span>
                  <span className={styles.dim}>
                    = [{g.items.map((i) => `"${i}"`).join(', ')}]
                  </span>
                </Fragment>
              ))}
            </div>

            <p className={styles.prompt}>git log --experience</p>
            <div className={styles.table}>
              {p.experience.map((e) => (
                <Fragment key={e.org + e.period}>
                  <span className={styles.dim}>
                    {e.period}
                  </span>
                  <span>
                    <span className={styles.key}>{e.org}</span> — {e.role}
                    {e.note && <span className={styles.dim}> · {e.note}</span>}
                  </span>
                </Fragment>
              ))}
            </div>

            <p className={styles.prompt}>cat education.txt certs.txt</p>
            <div className={styles.table}>
              {p.education.map((e) => (
                <Fragment key={e.org + e.period}>
                  <span className={styles.dim}>
                    {e.period}
                  </span>
                  <span>
                    <span className={styles.key}>{e.org}</span> — {e.role}
                  </span>
                </Fragment>
              ))}
              <span className={styles.dim}>certs</span>
              <span>{p.certs.join(' · ')}</span>
            </div>

            <p className={styles.prompt}>open contact</p>
            <p className={`${styles.out} ${styles.links}`}>
              <a href={`mailto:${hero.links.email}`}>{hero.links.email}</a>
              <a href={hero.links.github} target="_blank" rel="noreferrer">
                github
              </a>
              <a href={hero.links.linkedin} target="_blank" rel="noreferrer">
                linkedin
              </a>
            </p>
            <p className={`${styles.prompt} ${styles.cursor}`} />
          </div>
        </div>
      </main>
    </Layout>
  );
}
