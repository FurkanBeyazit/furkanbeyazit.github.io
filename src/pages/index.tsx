import {Fragment, useEffect, useState} from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useProfile from '@site/src/data/useProfile';
import type {Entry, Project} from '@site/src/data/types';
import {Button, Chip, GithubIcon, LinkedinIcon, MailIcon} from '@site/src/components/ui';
import Background from '@site/src/components/Background';
import NameFx from '@site/src/components/NameFx';
import {ThemeSettingsProvider, useThemeSettings} from '@site/src/theme-settings/ThemeSettings';
import ThemePanel from '@site/src/theme-settings/ThemePanel';
import styles from './index.module.css';

const SECTIONS = ['projects', 'earlier', 'skills', 'experience', 'contact'] as const;
type SectionId = (typeof SECTIONS)[number];

/** Highlights the section currently in view in the left nav. */
function useActiveSection(): SectionId {
  const [active, setActive] = useState<SectionId>('projects');
  useEffect(() => {
    const els = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id as SectionId);
      },
      {rootMargin: '-35% 0px -55% 0px'},
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return active;
}

/** Feeds cursor position into .fb-card CSS vars for the spotlight / tilt card styles. */
function useCardPointer() {
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const card = (e.target as HTMLElement).closest?.('.fb-card') as HTMLElement | null;
      if (!card) return;
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      card.style.setProperty('--mx', `${px * 100}%`);
      card.style.setProperty('--my', `${py * 100}%`);
      card.style.setProperty('--rx', `${(0.5 - py) * 10}deg`);
      card.style.setProperty('--ry', `${(px - 0.5) * 10}deg`);
    };
    const onLeave = (e: MouseEvent) => {
      const card = (e.target as HTMLElement).closest?.('.fb-card') as HTMLElement | null;
      card?.style.setProperty('--rx', '0deg');
      card?.style.setProperty('--ry', '0deg');
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseout', onLeave);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseout', onLeave);
    };
  }, []);
}

function ProjectEntry({project}: {project: Project}) {
  const src = useBaseUrl(project.image);
  return (
    <article className={clsx(styles.entry, 'fb-card')}>
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
    </article>
  );
}

function ExpEntry({entry}: {entry: Entry}) {
  return (
    <div className={clsx(styles.exp, 'fb-card')}>
      <span className={styles.dim}>{entry.period}</span>
      <div>
        <h4>
          <span className={styles.key}>{entry.org}</span> — {entry.role}
        </h4>
        {entry.note && <p>{entry.note}</p>}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <ThemeSettingsProvider>
      <HomeInner />
    </ThemeSettingsProvider>
  );
}

function HomeInner() {
  const p = useProfile();
  const {hero, labels} = p;
  const active = useActiveSection();
  const {settings} = useThemeSettings();
  useCardPointer();

  const nav: {id: SectionId; cmd: string; label: string}[] = [
    {id: 'projects', cmd: 'ls', label: labels.projects},
    {id: 'earlier', cmd: 'ls', label: labels.earlier},
    {id: 'skills', cmd: 'cat', label: labels.skills},
    {id: 'experience', cmd: 'git log', label: labels.experience},
    {id: 'contact', cmd: 'open', label: labels.contact},
  ];

  return (
    <Layout title={hero.title} description={hero.tagline}>
      <Background />
      <ThemePanel />
      <div className={styles.page}>
        <aside className={styles.side}>
          <div>
            <p className={styles.prompt}>whoami</p>
            <h1 className={styles.name}>
              <NameFx text={hero.name} fx={settings.fx} />
            </h1>
            <p className={styles.title}>{hero.title}</p>
            <p className={styles.loc}>{hero.location}</p>
            <p className={styles.tagline}>{hero.tagline}</p>
            <nav className={styles.nav}>
              {nav.map((n) => (
                <a key={n.id} href={`#${n.id}`} className={clsx(active === n.id && styles.active)}>
                  <span className={styles.cmd}>{n.cmd}</span> {n.label.toLowerCase()}
                </a>
              ))}
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
              <MailIcon /> {labels.sendEmail}
            </Button>
          </div>
        </aside>

        <main className={styles.main}>
          <section id="projects" className={styles.block}>
            <p className={styles.blockHead}>
              ls <b>projects/danusys</b>
            </p>
            <p className={styles.note}>{labels.projectsSub}</p>
            {p.projects.map((pr) => (
              <ProjectEntry key={pr.id} project={pr} />
            ))}
          </section>

          <section id="earlier" className={styles.block}>
            <p className={styles.blockHead}>
              ls <b>projects/earlier</b>
            </p>
            {p.earlier.map((pr) => (
              <ProjectEntry key={pr.id} project={pr} />
            ))}
          </section>

          <section id="skills" className={styles.block}>
            <p className={styles.blockHead}>
              cat <b>skills.toml</b>
            </p>
            <div className={styles.table}>
              {p.skills.map((g) => (
                <Fragment key={g.group}>
                  <span className={styles.key}>{g.group.toLowerCase().replace(/\s+/g, '_')}</span>
                  <span className={styles.dim}>= [{g.items.map((i) => `"${i}"`).join(', ')}]</span>
                </Fragment>
              ))}
            </div>
          </section>

          <section id="experience" className={styles.block}>
            <p className={styles.blockHead}>
              git log <b>--experience</b>
            </p>
            {p.experience.map((e) => (
              <ExpEntry key={e.org + e.period} entry={e} />
            ))}
            <p className={styles.blockHead}>
              cat <b>education.txt certs.txt</b>
            </p>
            {p.education.map((e) => (
              <ExpEntry key={e.org} entry={e} />
            ))}
            <div className={styles.certs}>
              {p.certs.map((c) => (
                <Chip key={c} outline>
                  {c}
                </Chip>
              ))}
            </div>
          </section>

          <section id="contact" className={styles.block}>
            <p className={styles.blockHead}>
              open <b>contact</b>
            </p>
            <p className={styles.note}>{labels.contactSub}</p>
            <Button href={`mailto:${hero.links.email}`}>
              <MailIcon /> {hero.links.email}
            </Button>
            <p className={clsx(styles.prompt, styles.cursor)} style={{marginTop: '1.5rem'}} />
          </section>
        </main>
      </div>
    </Layout>
  );
}
