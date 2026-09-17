import Layout from '@theme/Layout';
import clsx from 'clsx';
import useProfile from '@site/src/data/useProfile';
import {
  Button,
  Chip,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  ProjectCard,
  Section,
  Skills,
  Timeline,
} from '@site/src/components/ui';
import styles from './v2.module.css';

export default function V2() {
  const p = useProfile();
  const {hero, labels} = p;

  return (
    <Layout title={`V2 · ${hero.title}`} description={hero.tagline}>
      <main className={styles.wrap}>
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <span className={styles.eyebrow}>{hero.location}</span>
            <h1 className={styles.name}>{hero.name}</h1>
            <p className={clsx(styles.title, 'fb-gradient-text')}>{hero.title}</p>
            <p className={styles.tagline}>{hero.tagline}</p>
            <div className={styles.actions}>
              <Button href={hero.links.github}>
                <GithubIcon /> {labels.viewGithub}
              </Button>
              <Button href={hero.links.linkedin} variant="ghost">
                <LinkedinIcon /> {labels.viewLinkedin}
              </Button>
              <Button href={`mailto:${hero.links.email}`} variant="ghost">
                <MailIcon /> {labels.sendEmail}
              </Button>
            </div>
          </div>
        </header>

        <Section id="projects" title={labels.projects} sub={labels.projectsSub}>
          <div className={styles.bento}>
            {p.projects.map((pr) => (
              <ProjectCard key={pr.id} project={pr} className={styles[pr.size ?? 'md']} />
            ))}
          </div>
        </Section>

        <Section id="earlier" title={labels.earlier}>
          <div className={styles.bento}>
            {p.earlier.map((pr) => (
              <ProjectCard key={pr.id} project={pr} className={styles.lg} />
            ))}
          </div>
        </Section>

        <Section id="skills" title={labels.skills}>
          <Skills groups={p.skills} />
        </Section>

        <Section id="experience" title={labels.experience}>
          <div className={styles.twoCol}>
            <Timeline entries={p.experience} />
            <div>
              <p className={styles.subHead}>{labels.education}</p>
              <Timeline entries={p.education} />
              <p className={styles.subHead}>{labels.certs}</p>
              <div className={styles.certs}>
                {p.certs.map((c) => (
                  <Chip key={c} outline>
                    {c}
                  </Chip>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <div id="contact" className={styles.contact}>
          <h2>{labels.contact}</h2>
          <p>{labels.contactSub}</p>
          <div className={styles.actions}>
            <Button href={`mailto:${hero.links.email}`}>
              <MailIcon /> {hero.links.email}
            </Button>
            <Button href={hero.links.linkedin} variant="ghost">
              <LinkedinIcon /> LinkedIn
            </Button>
          </div>
        </div>
      </main>
    </Layout>
  );
}
