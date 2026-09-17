import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useProfile from '@site/src/data/useProfile';
import type {Project} from '@site/src/data/types';
import {Button, Chip, GithubIcon, LinkedinIcon, MailIcon, Skills, Timeline} from '@site/src/components/ui';
import styles from './v1.module.css';

function Row({project}: {project: Project}) {
  const src = useBaseUrl(project.image);
  return (
    <div className={styles.row}>
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

export default function V1() {
  const p = useProfile();
  const {hero, labels} = p;
  const nav = [
    ['#about', hero.name.split(' ')[0]],
    ['#projects', labels.projects],
    ['#earlier', labels.earlier],
    ['#skills', labels.skills],
    ['#experience', labels.experience],
    ['#contact', labels.contact],
  ];

  return (
    <Layout title={`V1 · ${hero.title}`} description={hero.tagline}>
      <div className={styles.layout}>
        <nav className={styles.nav}>
          {nav.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <main className={styles.content}>
          <section id="about" className={styles.intro}>
            <h1>{hero.name}</h1>
            <p className={`${styles.title} fb-gradient-text`}>{hero.title}</p>
            <p>{hero.tagline}</p>
            <div className={styles.links}>
              <Button href={hero.links.github} variant="ghost">
                <GithubIcon /> GitHub
              </Button>
              <Button href={hero.links.linkedin} variant="ghost">
                <LinkedinIcon /> LinkedIn
              </Button>
              <Button href={`mailto:${hero.links.email}`} variant="ghost">
                <MailIcon /> {labels.sendEmail}
              </Button>
            </div>
          </section>

          <section id="projects" className={styles.section}>
            <h2 className={styles.sectionTitle}>{labels.projects}</h2>
            <p className="fb-muted">{labels.projectsSub}</p>
            <div className={styles.list}>
              {p.projects.map((pr) => (
                <Row key={pr.id} project={pr} />
              ))}
            </div>
          </section>

          <section id="earlier" className={styles.section}>
            <h2 className={styles.sectionTitle}>{labels.earlier}</h2>
            <div className={styles.list}>
              {p.earlier.map((pr) => (
                <Row key={pr.id} project={pr} />
              ))}
            </div>
          </section>

          <section id="skills" className={styles.section}>
            <h2 className={styles.sectionTitle}>{labels.skills}</h2>
            <Skills groups={p.skills} />
          </section>

          <section id="experience" className={styles.section}>
            <h2 className={styles.sectionTitle}>{labels.experience}</h2>
            <Timeline entries={p.experience} />
            <h2 className={styles.sectionTitle}>{labels.education}</h2>
            <Timeline entries={p.education} />
            <h2 className={styles.sectionTitle}>{labels.certs}</h2>
            <div className={styles.certs}>
              {p.certs.map((c) => (
                <Chip key={c} outline>
                  {c}
                </Chip>
              ))}
            </div>
          </section>

          <section id="contact" className={styles.section}>
            <h2 className={styles.sectionTitle}>{labels.contact}</h2>
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
