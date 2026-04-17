import { Link } from 'react-router-dom';
import { Target, Eye, Heart } from 'lucide-react';
import CTASection from '../components/CTASection';
import StatCounter from '../components/StatCounter';
import Reveal from '../components/Reveal';
import { team } from '../data/team';
import styles from './About.module.css';

const stats = [
  { value: 200,  suffix: '+', label: 'Projects Completed' },
  { value: 15,   suffix: '+', label: 'Years Active' },
  { value: 8,    suffix: '',  label: 'Regions Covered' },
  { value: 4,    suffix: '',  label: 'West African Countries' },
];

const values = [
  {
    icon: '🏆',
    title: 'Excellence',
    desc: 'We hold ourselves to the highest technical and professional standards on every project, regardless of size or budget.',
  },
  {
    icon: '🤝',
    title: 'Integrity',
    desc: 'Transparent communication, honest pricing, and ethical conduct define every client and partner relationship.',
  },
  {
    icon: '🌱',
    title: 'Sustainability',
    desc: 'We design and build with the long term in mind — minimising environmental impact and maximising asset longevity.',
  },
  {
    icon: '👥',
    title: 'Community',
    desc: "Our projects don't just serve clients — they uplift the communities they're built in, creating jobs and lasting infrastructure.",
  },
  {
    icon: '🔬',
    title: 'Innovation',
    desc: 'We adopt proven new technologies and methodologies that improve quality, speed, and value for our clients.',
  },
  {
    icon: '🛡️',
    title: 'Safety',
    desc: 'Zero-harm is not a target — it\'s a non-negotiable baseline. Every worker goes home safe, every day.',
  },
];

const milestones = [
  { year: '2008', event: 'Founded in Accra by Emmanuel Asante-Mensah and three co-engineers.' },
  { year: '2010', event: 'First major government contract — Accra Urban Road Improvement Phase 1.' },
  { year: '2013', event: 'Expanded to Kumasi; secured first ₵50M+ project (Ashanti Regional Hospital).' },
  { year: '2016', event: 'Achieved ISO 9001:2015 certification and launched HSE zero-LTI programme.' },
  { year: '2018', event: '10th anniversary. Workforce surpassed 500. Expanded into Nigeria and Côte d\'Ivoire.' },
  { year: '2020', event: 'Delivered Tema Motorway Junction upgrade under pandemic constraints, on schedule.' },
  { year: '2022', event: 'Launched dedicated Civil Engineering division. Completed 200th project milestone.' },
  { year: '2024', event: 'Recognised as one of Ghana\'s Top 10 Construction Companies by Ghana Business Awards.' },
];

export default function About() {
  return (
    <main className="page-top">
      {/* ── PAGE HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroLabel}>About Maspejo</span>
            <div className={styles.heroHeading}>
              <div className={styles.heroBar} />
              <h1 className={styles.heroTitle}>
                Building Ghana for<br />
                <em className={styles.heroEm}>Over 15 Years</em>
              </h1>
            </div>
            <p className={styles.heroSub}>
              From a small Accra-based contractor to one of West Africa's most respected
              construction firms — our story is one of craft, commitment, and community.
            </p>
            <div className={styles.heroCrumb}>
              <Link to="/" className={styles.crumbLink}>Home</Link>
              <span className={styles.crumbSep}>/</span>
              <span>About</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="section bg-surface">
        <div className="container">
          <div className={styles.storyGrid}>
            <Reveal animation="fade-right" duration={800}>
            <div className={styles.storyContent}>
              <span className="section-label">Our Foundation</span>
              <h2 className="section-title">A Company Built on<br />More Than Concrete</h2>
              <p>
                Maspejo Company Limited was founded in 2008 with a clear purpose: to prove that
                Ghanaian engineers could deliver world-class construction without compromising on
                ethics or quality. Our founders — all trained in Ghanaian universities and
                international postgraduate programmes — brought together expertise in structural,
                civil, and project management disciplines.
              </p>
              <br />
              <p>
                What started as a five-person firm taking on modest residential contracts has grown
                into a 500+ strong organisation delivering infrastructure, commercial, and civil
                projects valued at hundreds of millions of Ghana Cedis annually. Through every
                project, we have remained anchored to the founding belief: that buildings and
                infrastructure shape lives, and that responsibility demands nothing less than
                absolute dedication to quality.
              </p>
              <br />
              <p>
                Today, Maspejo operates across eight Ghanaian regions and maintains a presence
                in Nigeria and Côte d'Ivoire — always bringing the same Ghanaian work ethic and
                international technical standards to every site.
              </p>
            </div>
            </Reveal>
            <Reveal animation="fade-left" duration={800} delay={150}>
            <div className={styles.storyImages}>
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=700&q=80"
                alt="Maspejo engineering team"
                className={styles.storyImgMain}
              />
              <div className={styles.storyImgRow}>
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80"
                  alt="Construction site"
                  className={styles.storyImgSm}
                />
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80"
                  alt="Civil engineering"
                  className={styles.storyImgSm}
                />
              </div>
            </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="section bg-surface-tinted">
        <div className="container">
          <StatCounter stats={stats} />
        </div>
      </section>

      {/* ── MISSION / VISION / VALUES ── */}
      <section className="section bg-surface">
        <div className="container">
          <Reveal animation="fade-up">
            <div className="section-header section-header--center">
              <span className="section-label">What Drives Us</span>
              <h2 className="section-title">Mission, Vision & Values</h2>
            </div>
          </Reveal>

          <div className={styles.mvGrid}>
            <Reveal animation="zoom-up" delay={0}><div className={styles.mvCard}>
              <div className={styles.mvIconWrap}><Target size={24} /></div>
              <h3 className={styles.mvTitle}>Our Mission</h3>
              <p className={styles.mvText}>
                To deliver construction and infrastructure solutions of enduring quality that
                transform communities, exceed client expectations, and set the standard for
                professional excellence in Ghana and West Africa.
              </p>
            </div></Reveal>
            <Reveal animation="zoom-up" delay={100}><div className={styles.mvCard}>
              <div className={styles.mvIconWrap}><Eye size={24} /></div>
              <h3 className={styles.mvTitle}>Our Vision</h3>
              <p className={styles.mvText}>
                To be the most trusted and technically accomplished construction company in
                West Africa — recognised for integrity, innovation, and the lasting impact our
                work has on the built environment and the lives it supports.
              </p>
            </div></Reveal>
            <Reveal animation="zoom-up" delay={200}><div className={styles.mvCard}>
              <div className={styles.mvIconWrap}><Heart size={24} /></div>
              <h3 className={styles.mvTitle}>Our Promise</h3>
              <p className={styles.mvText}>
                Every Maspejo project receives the same commitment: transparent communication,
                rigorous quality control, zero safety compromise, and a finished structure that
                will still be standing — and standing proudly — in 50 years.
              </p>
            </div></Reveal>
          </div>

          {/* Core Values */}
          <div className={styles.valuesSection}>
            <Reveal animation="fade-up"><h3 className={styles.valuesTitle}>Our Core Values</h3></Reveal>
            <div className={styles.valuesGrid}>
              {values.map((v, i) => (
                <Reveal key={v.title} animation="fade-up" delay={i * 70} duration={600}>
                  <div className={styles.valueCard}>
                    <div className={styles.valueIcon}>{v.icon}</div>
                    <h4 className={styles.valueName}>{v.title}</h4>
                    <p className={styles.valueDesc}>{v.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MILESTONES / TIMELINE ── */}
      <section className={`section ${styles.timelineSection}`}>
        <div className="container">
          <Reveal animation="fade-up">
            <div className="section-header section-header--center">
              <span className="section-label" style={{color:'var(--color-accent-bright)'}}>History</span>
              <h2 className="section-title" style={{color:'var(--color-white)'}}>Our Journey</h2>
            </div>
          </Reveal>

          <div className={styles.timeline}>
            {milestones.map((m, i) => (
              <Reveal key={m.year} animation={i % 2 === 0 ? 'fade-right' : 'fade-left'} delay={i * 60} duration={600}>
                <div className={`${styles.milestone} ${i % 2 === 0 ? styles.milestoneLeft : styles.milestoneRight}`}>
                  <div className={styles.milestoneYear}>{m.year}</div>
                  <div className={styles.milestoneDot} />
                  <div className={styles.milestoneCard}>
                    <p>{m.event}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <div className={styles.timelineLine} />
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="section bg-surface">
        <div className="container">
          <Reveal animation="fade-up">
            <div className="section-header section-header--center">
              <span className="section-label">Leadership</span>
              <h2 className="section-title">Meet the Team</h2>
              <p className="section-desc" style={{margin:'0 auto'}}>
                The experienced professionals driving Maspejo's vision forward every day.
              </p>
            </div>
          </Reveal>

          <div className={styles.teamGrid}>
            {team.map((member, i) => (
              <Reveal key={member.name} animation="zoom-up" delay={(i % 3) * 100} duration={700}>
              <div className={styles.teamCard}>
                <div className={styles.teamImg}>
                  <img src={member.image} alt={member.name} loading="lazy" />
                </div>
                <div className={styles.teamInfo}>
                  <h3 className={styles.teamName}>{member.name}</h3>
                  <span className={styles.teamRole}>{member.role}</span>
                  <p className={styles.teamBio}>{member.bio}</p>
                  <div className={styles.teamCredentials}>
                    {member.credentials.map(c => (
                      <span key={c} className="badge badge--amber">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection
        title="Ready to Work With Our Team?"
        subtitle="Bring your project vision to Maspejo and we'll put our best engineers and builders behind it."
        primaryLabel="Contact Our Team"
        primaryTo="/contact"
      />
    </main>
  );
}
