import type {ReactNode} from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import type {Entry, Project, SkillGroup} from '@site/src/data/types';
import styles from './ui.module.css';

export function Chip({children, outline}: {children: ReactNode; outline?: boolean}) {
  return <span className={clsx(styles.chip, outline && styles.chipOutline)}>{children}</span>;
}

export function Button({
  href,
  children,
  variant = 'solid',
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: 'solid' | 'ghost';
  className?: string;
}) {
  const external = href.startsWith('http') || href.startsWith('mailto:');
  return (
    <a
      href={href}
      className={clsx(styles.btn, variant === 'solid' ? styles.btnSolid : styles.btnGhost, className)}
      target={external && !href.startsWith('mailto:') ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}>
      {children}
    </a>
  );
}

export function Section({
  id,
  title,
  sub,
  children,
  className,
}: {
  id?: string;
  title?: string;
  sub?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={clsx(styles.section, className)}>
      {title && (
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>{title}</h2>
          {sub && <p className={styles.sectionSub}>{sub}</p>}
        </div>
      )}
      {children}
    </section>
  );
}

export function ProjectCard({project, className, hideImage}: {project: Project; className?: string; hideImage?: boolean}) {
  const src = useBaseUrl(project.image);
  return (
    <article className={clsx(styles.card, className)}>
      {!hideImage && <img className={styles.cardImage} src={src} alt={project.name} loading="lazy" />}
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{project.name}</h3>
        <p className={styles.cardText}>{project.summary}</p>
        <div className={styles.cardStack}>
          {project.stack.map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Timeline({entries}: {entries: Entry[]}) {
  return (
    <ul className={styles.timeline}>
      {entries.map((e) => (
        <li key={e.org + e.period} className={styles.timelineItem}>
          <div className={styles.timelinePeriod}>{e.period}</div>
          <p className={styles.timelineOrg}>{e.org}</p>
          <p className={styles.timelineRole}>{e.role}</p>
          {e.note && <p className={styles.timelineNote}>{e.note}</p>}
        </li>
      ))}
    </ul>
  );
}

export function Skills({groups}: {groups: SkillGroup[]}) {
  return (
    <div className={styles.skillGroups}>
      {groups.map((g) => (
        <div key={g.group} className={styles.skillGroup}>
          <p className={styles.skillGroupTitle}>{g.group}</p>
          <div className={styles.skillItems}>
            {g.items.map((i) => (
              <Chip key={i} outline>
                {i}
              </Chip>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
  </svg>
);

export const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
);

export const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);
