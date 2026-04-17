import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import CTASection from '../components/CTASection';
import Reveal from '../components/Reveal';
import { services } from '../data/services';
import styles from './Services.module.css';

const process = [
  { step: '01', title: 'Consultation', desc: 'We listen carefully to your requirements, site constraints, budget, and timeline to define the project scope.' },
  { step: '02', title: 'Design & Planning', desc: 'Our engineers and architects produce detailed designs, structural calculations, and project schedules.' },
  { step: '03', title: 'Procurement', desc: 'We source quality materials through our vetted supplier network, ensuring cost-efficiency without compromise.' },
  { step: '04', title: 'Construction', desc: 'Site teams execute to plan with daily supervision, HSE compliance checks, and quality hold points.' },
  { step: '05', title: 'Quality Control', desc: 'Independent inspections and testing at every critical stage confirm structural and finish quality.' },
  { step: '06', title: 'Handover', desc: 'Full documentation, warranties, training for facilities teams, and post-handover support included.' },
];

export default function Services() {
  return (
    <main className="page-top">
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroLabel}>What We Offer</span>
            <div className={styles.heroHeading}>
              <div className={styles.heroBar} />
              <h1 className={styles.heroTitle}>
                Full-Spectrum<br />
                <em className={styles.heroEm}>Construction Services</em>
              </h1>
            </div>
            <p className={styles.heroSub}>
              Six core service lines covering every dimension of the built environment —
              from concept and design through to handover and beyond.
            </p>
            <div className={styles.heroCrumb}>
              <Link to="/" className={styles.crumbLink}>Home</Link>
              <span>/</span>
              <span>Services</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES DETAIL ── */}
      <section className="section bg-surface">
        <div className="container">
          <Reveal animation="fade-up">
            <div className="section-header section-header--center">
              <span className="section-label">Our Capabilities</span>
              <h2 className="section-title">What Maspejo Builds</h2>
            </div>
          </Reveal>

          <div className={styles.servicesList}>
            {services.map((svc, i) => (
              <Reveal key={svc.id} animation={i % 2 === 0 ? 'fade-right' : 'fade-left'} duration={800}>
                <div id={svc.id} className={`${styles.serviceRow} ${i % 2 !== 0 ? styles.serviceRowReverse : ''}`}>
                  <div className={styles.serviceImg}>
                    <img src={svc.image} alt={svc.title} loading="lazy" />
                    <div className={styles.serviceImgOverlay} />
                    <span className={styles.serviceImgIcon}>{svc.icon}</span>
                  </div>
                  <div className={styles.serviceContent}>
                    <span className="section-label">{`Service ${String(i + 1).padStart(2, '0')}`}</span>
                    <h2 className={styles.serviceTitle}>{svc.title}</h2>
                    <p className={styles.serviceDesc}>{svc.longDesc}</p>
                    <ul className={styles.featureList}>
                      {svc.features.map(f => (
                        <li key={f} className={styles.featureItem}>
                          <CheckCircle size={16} className={styles.featureIcon} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="btn btn--primary" style={{marginTop:'1.5rem'}}>
                      Enquire About This Service <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className={`section ${styles.processSection}`}>
        <div className="container">
          <Reveal animation="fade-up">
            <div className="section-header section-header--center">
              <span className="section-label" style={{color:'var(--color-accent-bright)'}}>How We Work</span>
              <h2 className="section-title" style={{color:'var(--color-white)'}}>Our Delivery Process</h2>
              <p className="section-desc" style={{color:'var(--color-text-muted)', margin:'0 auto'}}>
                A transparent, disciplined six-stage methodology proven across 200+ projects.
              </p>
            </div>
          </Reveal>

          <div className={styles.processGrid}>
            {process.map((p, i) => (
              <Reveal key={p.step} animation="zoom-up" delay={i * 80} duration={600}>
                <div className={styles.processCard}>
                  <div className={styles.processStep}>{p.step}</div>
                  <h3 className={styles.processTitle}>{p.title}</h3>
                  <p className={styles.processDesc}>{p.desc}</p>
                  {i < process.length - 1 && <div className={styles.processArrow}>→</div>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="section bg-surface-tinted">
        <div className="container">
          <Reveal animation="fade-up">
            <div className="section-header section-header--center">
              <span className="section-label">Credentials</span>
              <h2 className="section-title">Certified to Deliver</h2>
              <p className="section-desc" style={{margin:'0 auto'}}>
                Our certifications aren't plaques on a wall — they're active commitments to operational excellence.
              </p>
            </div>
          </Reveal>
          <div className={styles.certGrid}>
            {[
              { code: 'ISO 9001:2015', label: 'Quality Management System', desc: 'Certified by Bureau Veritas. Covers all project delivery phases.' },
              { code: 'ISO 45001:2018', label: 'Occupational Health & Safety', desc: 'Demonstrates our zero-harm commitment to every worker on site.' },
              { code: 'GRC Class A', label: 'Ghana Revenue Class', desc: 'Highest tier pre-qualification for government contract procurement.' },
              { code: 'GHACOE', label: 'Ghana Institution of Engineers', desc: 'All senior engineers hold full corporate membership (MIStructE / MICE).' },
            ].map((cert, i) => (
              <Reveal key={cert.code} animation="zoom-up" delay={i * 80}>
              <div className={styles.certCard}>
                <span className={styles.certCode}>{cert.code}</span>
                <h4 className={styles.certLabel}>{cert.label}</h4>
                <p className={styles.certDesc}>{cert.desc}</p>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a Project in Mind?"
        subtitle="Tell us about your project and we'll respond within 24 hours with a qualified consultation."
        primaryLabel="Start the Conversation"
        primaryTo="/contact"
      />
    </main>
  );
}
