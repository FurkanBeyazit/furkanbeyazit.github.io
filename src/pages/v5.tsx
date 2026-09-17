import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useProfile from '@site/src/data/useProfile';
import type {Entry, Project} from '@site/src/data/types';
import {Button, Chip, GithubIcon, LinkedinIcon, MailIcon, Skills} from '@site/src/components/ui';
import styles from './v5.module.css';

function ProjectItem({project}: {project: Project}) {
  const src = useBaseUrl(project.image);
  return (
    <div className={styles.item}>
      <img src={src} alt={project.name} loading="lazy" />
      <div>
        <h3>{project.name}</h3>
        <p>{project.summary}</p>
        <div className={styles.stack}>
          {project.stack.map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
        </div>
      </div>
    </div>
  );
}

function EntryItem({entry}: {entry: Entry}) {
  return (
    <div className={styles.item}>
      <div className={styles.period}>{entry.period}</div>
      <div>
        <h3>
          {entry.org} · <span className="fb-muted">{entry.role}</span>
        </h3>
        {entry.note && <p>{entry.note}</p>}
      </div>
    </div>
  );
}

export default function V5() {
  const p = useProfile();
  const {hero, labels} = p;
  return (
    <Layout title={`V5 · ${hero.title}`} description={hero.tagline}>
      <div className={styles.page}>
        <aside className={styles.side}>
          <div>
            <h1 className={styles.name}>{hero.name}</h1>
            <p className={`${styles.title} fb-gradient-text`}>{hero.title}</p>
            <p className={styles.tagline}>{hero.tagline}</p>
            <nav className={styles.anchors}>
              <a href="#projects">{labels.projects}</a>
              <a href="#earlier">{labels.earlier}</a>
              <a href="#skills">{labels.skills}</a>
              <a href="#experience">{labels.experience}</a>
            </nav>
          </div>
          <div className={styles.social}>
            <Button href={hero.links.github} variant="ghost">
              <GithubIcon /> GitHub
            </Button>
            <Button href={hero.links.linkedin} variant="ghost">
              <LinkedinIcon /> LinkedIn
            </Button>
            <Button href={`mailto:${hero.links.email}`} variant="ghost">
              <MailIcon />
            </Button>
          </div>
        </aside>

        <main className={styles.main}>
          <section id="projects" className={styles.block}>
            <p className={styles.blockTitle}>{labels.projects}</p>
            <p className="fb-muted" style={{marginBottom: '1rem'}}>
              {labels.projectsSub}
            </p>
            {p.projects.map((pr) => (
              <ProjectItem key={pr.id} project={pr} />
            ))}
          </section>

          <section id="earlier" className={styles.block}>
            <p className={styles.blockTitle}>{labels.earlier}</p>
            {p.earlier.map((pr) => (
              <ProjectItem key={pr.id} project={pr} />
            ))}
          </section>

          <section id="skills" className={styles.block}>
            <p className={styles.blockTitle}>{labels.skills}</p>
            <Skills groups={p.skills} />
          </section>

          <section id="experience" className={styles.block}>
            <p className={styles.blockTitle}>{labels.experience}</p>
            {p.experience.map((e) => (
              <EntryItem key={e.org + e.period} entry={e} />
            ))}
            <p className={styles.blockTitle}>{labels.education}</p>
            {p.education.map((e) => (
              <EntryItem key={e.org} entry={e} />
            ))}
            <p className={styles.blockTitle}>{labels.certs}</p>
            <div className={styles.certs}>
              {p.certs.map((c) => (
                <Chip key={c} outline>
                  {c}
                </Chip>
              ))}
            </div>
          </section>

          <section id="contact" className={styles.block}>
            <p className={styles.blockTitle}>{labels.contact}</p>
            <p className="fb-muted">{labels.contactSub}</p>
            <Button href={`mailto:${hero.links.email}`}>
              <MailIcon /> {hero.links.email}
            </Button>
          </section>
        </main>
      </div>
    </Layout>
  );
}
