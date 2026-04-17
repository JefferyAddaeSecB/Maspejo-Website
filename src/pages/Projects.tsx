import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, DollarSign, Clock } from 'lucide-react';
import CTASection from '../components/CTASection';
import Reveal from '../components/Reveal';
import { projects, categories } from '../data/projects';
import type { ProjectCategory } from '../data/projects';
import styles from './Projects.module.css';

export default function Projects() {
  const [active, setActive] = useState<ProjectCategory>('All');

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.category === active);

  return (
    <main className="page-top">
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroLabel}>Our Portfolio</span>
            <div className={styles.heroHeading}>
              <div className={styles.heroBar} />
              <h1 className={styles.heroTitle}>
                Landmark Projects<br />
                <em className={styles.heroEm}>Across West Africa</em>
              </h1>
            </div>
            <p className={styles.heroSub}>
              From bridges and highways to commercial towers and hospitals — a selection
              of projects that define our capabilities and commitment.
            </p>
            <div className={styles.heroCrumb}>
              <Link to="/" className={styles.crumbLink}>Home</Link>
              <span>/</span>
              <span>Projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section className="section bg-surface">
        <div className="container">
          {/* Filter bar */}
          <div className={styles.filterBar}>
            {categories.map(cat => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${active === cat ? styles.filterActive : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
                <span className={styles.filterCount}>
                  {cat === 'All' ? projects.length : projects.filter(p => p.category === cat).length}
                </span>
              </button>
            ))}
          </div>

          {/* Project grid */}
          <div className={styles.grid}>
            {filtered.map((proj, i) => (
              <Reveal key={proj.id} animation="zoom-up" delay={(i % 3) * 100} duration={650}>
              <div className={styles.card}>
                <div className={styles.cardImg}>
                  <img src={proj.image} alt={proj.title} loading="lazy" />
                  <div className={styles.cardImgOverlay} />
                  <div className={styles.cardBadges}>
                    <span className={`badge ${proj.status === 'Completed' ? 'badge--green' : 'badge--amber'}`}>
                      {proj.status}
                    </span>
                    <span className="badge badge--dark">{proj.category}</span>
                  </div>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{proj.title}</h3>
                  <p className={styles.cardDesc}>{proj.shortDesc}</p>

                  <div className={styles.cardMeta}>
                    <div className={styles.metaItem}>
                      <MapPin size={13} />
                      <span>{proj.location}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <Calendar size={13} />
                      <span>{proj.year}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <DollarSign size={13} />
                      <span>{proj.value}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <Clock size={13} />
                      <span>{proj.duration}</span>
                    </div>
                  </div>

                  <div className={styles.cardTags}>
                    {proj.tags.map(t => (
                      <span key={t} className="badge badge--amber">{t}</span>
                    ))}
                  </div>

                  <div className={styles.cardClient}>
                    <span className={styles.clientLabel}>Client:</span>
                    <span className={styles.clientName}>{proj.client}</span>
                  </div>
                </div>
              </div>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className={styles.empty}>
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── STATS ── */}
      <section className={`section ${styles.statsSection}`}>
        <div className="container">
          <Reveal animation="fade-up">
            <div className="section-header section-header--center">
              <span className="section-label" style={{color:'var(--color-accent-bright)'}}>By the Numbers</span>
              <h2 className="section-title" style={{color:'var(--color-white)'}}>Project Scale & Reach</h2>
            </div>
          </Reveal>
          <div className={styles.statsGrid}>
            {[
              { val: 'GHS 2.1B+', label: 'Total Project Value Delivered' },
              { val: '8',          label: 'Regions Across Ghana' },
              { val: '4',          label: 'West African Countries' },
              { val: '200+',       label: 'Completed Projects' },
            ].map((s, i) => (
              <Reveal key={s.label} animation="zoom-up" delay={i * 100}>
              <div className={styles.statCard}>
                <div className={styles.statVal}>{s.val}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Add Your Project to This Portfolio?"
        subtitle="We'd love to hear about your next project and explore how Maspejo can help bring it to life."
        primaryLabel="Discuss Your Project"
        primaryTo="/contact"
      />
    </main>
  );
}
