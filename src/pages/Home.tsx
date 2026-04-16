import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Quote, ChevronRight, Play } from 'lucide-react';
import CredibilityStrip from '../components/CredibilityStrip';
import StatCounter from '../components/StatCounter';
import CTASection from '../components/CTASection';
import { services } from '../data/services';
import { projects } from '../data/projects';
import styles from './Home.module.css';

const stats = [
  { value: 200, suffix: '+', label: 'Projects Delivered', description: 'Across Ghana and West Africa' },
  { value: 15,  suffix: '+', label: 'Years of Excellence', description: 'Since our founding in 2008' },
  { value: 98,  suffix: '%', label: 'Client Satisfaction', description: 'Based on post-project surveys' },
  { value: 500, suffix: '+', label: 'Expert Professionals', description: 'Engineers, architects & craftsmen' },
];

const testimonials = [
  {
    quote: "Maspejo delivered our hospital project three weeks ahead of schedule without compromising a single spec. Their site management is simply world-class.",
    author: "Dr. Kwesi Amponsah",
    role: "Director, Ghana Health Service Western Region",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
  },
  {
    quote: "The quality of their civil engineering work on the Tema bypass speaks for itself. Maspejo understands both the technical and community dimensions of infrastructure.",
    author: "Ing. Abena Yeboah",
    role: "Project Director, Ghana Highway Authority",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
  },
  {
    quote: "From design coordination to final handover, Maspejo managed our commercial complex with the professionalism I've only seen from international firms.",
    author: "Samuel Acheampong",
    role: "CEO, Ashanti Developments Ltd",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80",
  },
];

const whyChooseUs = [
  { title: 'Proven Track Record', desc: '200+ completed projects across Ghana and West Africa with a 98% satisfaction rate.' },
  { title: 'Certified Expertise',   desc: 'ISO 9001:2015, GRC, and GHACOE certifications underpin every project we deliver.' },
  { title: 'On-Time Delivery',      desc: 'Our rigorous scheduling methodology consistently beats industry average delivery rates.' },
  { title: 'Safety First Culture',  desc: 'Zero-LTI programme — our sites average 2.1M man-hours without a lost-time incident.' },
  { title: 'Local Knowledge',       desc: 'Deep understanding of Ghana\'s regulatory environment, supply chains, and site conditions.' },
  { title: 'Sustainable Builds',    desc: 'Green building principles integrated into design from day one — not bolted on afterwards.' },
];

export default function Home() {
  const featuredProjects = projects.filter(p => p.status === 'Completed').slice(0, 3);
  const featuredServices = services.slice(0, 4);

  return (
    <main className="page-top">
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />

        <div className="container">
          <div className={styles.heroContent}>
            <div className={`${styles.heroLabel} anim-fade`}>
              <span className={styles.labelDot} />
              Established 2008 · Accra, Ghana
            </div>

            <div className={styles.heroHeading}>
              <div className={styles.heroBar} />
              <h1 className={`${styles.heroTitle} anim-up d1`}>
                Building Ghana's<br />
                <em className={styles.heroEmphasis}>Future</em> — One<br />
                Structure at a Time.
              </h1>
            </div>

            <p className={`${styles.heroSubtitle} anim-up d2`}>
              Maspejo Company Limited delivers premium construction, civil engineering,
              and infrastructure development across Ghana and West Africa — with the
              precision and integrity your vision deserves.
            </p>

            <div className={`${styles.heroActions} anim-up d3`}>
              <Link to="/projects" className="btn btn--primary btn--lg">
                View Our Work <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn--outline btn--lg">
                Get a Quote
              </Link>
            </div>

            <div className={`${styles.heroTrust} anim-up d4`}>
              <div className={styles.trustAvatars}>
                {['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&q=80',
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&q=80',
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&q=80',
                  'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=40&q=80',
                ].map((src, i) => (
                  <img key={i} src={src} alt="" className={styles.trustAvatar} />
                ))}
              </div>
              <div>
                <div className={styles.trustStars}>★★★★★</div>
                <p className={styles.trustText}>Trusted by 500+ clients across Ghana</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={styles.scrollHint}>
          <div className={styles.scrollLine} />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── CREDIBILITY STRIP ── */}
      <CredibilityStrip />

      {/* ── STATS ── */}
      <section className={`section bg-surface-tinted`}>
        <div className="container">
          <StatCounter stats={stats} />
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="section bg-surface">
        <div className="container">
          <div className={`section-header`}>
            <span className="section-label">What We Build</span>
            <h2 className="section-title">Full-Spectrum Construction<br />& Engineering Services</h2>
            <p className="section-desc">
              From groundbreaking to ribbon-cutting, Maspejo offers a complete suite of
              services to bring any construction vision to life.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {featuredServices.map((svc, i) => (
              <div key={svc.id} className={`${styles.serviceCard} anim-up d${i + 1}`}>
                <div className={styles.serviceIcon}>{svc.icon}</div>
                <h3 className={styles.serviceTitle}>{svc.title}</h3>
                <p className={styles.serviceDesc}>{svc.shortDesc}</p>
                <Link to="/services" className={styles.serviceLink}>
                  Learn More <ChevronRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          <div className={styles.servicesFooter}>
            <Link to="/services" className="btn btn--outline-dark">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT TEASER ── */}
      <section className="section bg-surface-tinted">
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImages}>
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80"
                alt="Maspejo construction site"
                className={styles.aboutImgMain}
              />
              <div className={styles.aboutImgAux}>
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&q=80"
                  alt="Engineers on site"
                  className={styles.aboutImgSm}
                />
                <div className={styles.aboutBadge}>
                  <span className={styles.aboutBadgeNum}>15+</span>
                  <span className={styles.aboutBadgeLabel}>Years of<br />Excellence</span>
                </div>
              </div>
            </div>

            <div className={styles.aboutContent}>
              <span className="section-label">Our Story</span>
              <h2 className="section-title">Ghana's Most Trusted Construction Partner</h2>
              <p style={{marginBottom:'1.25rem'}}>
                Founded in 2008 by a team of passionate Ghanaian engineers, Maspejo Company Limited
                has grown from a regional contractor into one of West Africa's most respected
                construction and infrastructure firms.
              </p>
              <p style={{marginBottom:'2rem'}}>
                We combine international engineering standards with deep local knowledge —
                understanding Ghana's terrain, regulatory landscape, and community context — to
                deliver projects that not only stand the test of time, but transform the communities
                they serve.
              </p>

              <div className={styles.aboutChecks}>
                {whyChooseUs.slice(0, 4).map(item => (
                  <div key={item.title} className={styles.checkItem}>
                    <CheckCircle size={18} className={styles.checkIcon} />
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/about" className="btn btn--primary" style={{marginTop:'2rem'}}>
                Learn About Us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="section bg-surface">
        <div className="container">
          <div className="section-header" style={{display:'flex', justifyContent:'space-between', alignItems:'flex-end', flexWrap:'wrap', gap:'1rem'}}>
            <div>
              <span className="section-label">Portfolio</span>
              <h2 className="section-title" style={{marginBottom:0}}>Landmark Projects<br />Across Ghana</h2>
            </div>
            <Link to="/projects" className="btn btn--outline-dark">
              All Projects <ArrowRight size={16} />
            </Link>
          </div>

          <div className={styles.projectsGrid}>
            {featuredProjects.map((proj, i) => (
              <div key={proj.id} className={`${styles.projectCard} ${i === 0 ? styles.projectCardFeatured : ''} anim-up d${i + 1}`}>
                <div className={styles.projectImg}>
                  <img src={proj.image} alt={proj.title} loading="lazy" />
                  <div className={styles.projectOverlay} />
                  <span className={`badge badge--green ${styles.projectBadge}`}>{proj.status}</span>
                </div>
                <div className={styles.projectInfo}>
                  <div className={styles.projectMeta}>
                    <span className="badge badge--amber">{proj.category}</span>
                    <span className={styles.projectYear}>{proj.year}</span>
                  </div>
                  <h3 className={styles.projectTitle}>{proj.title}</h3>
                  <p className={styles.projectDesc}>{proj.shortDesc}</p>
                  <div className={styles.projectStats}>
                    <span>Value: <strong>{proj.value}</strong></span>
                    <span>Duration: <strong>{proj.duration}</strong></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className={`section ${styles.whySection}`}>
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-label" style={{color:'var(--color-accent-bright)'}}>Our Advantage</span>
            <h2 className="section-title" style={{color:'var(--color-white)'}}>Why Clients Choose Maspejo</h2>
            <p className="section-desc" style={{color:'var(--color-text-muted)', margin:'0 auto'}}>
              Six pillars that set us apart in Ghana's competitive construction landscape.
            </p>
          </div>
          <div className={styles.whyGrid}>
            {whyChooseUs.map((item, i) => (
              <div key={item.title} className={`${styles.whyCard} anim-up d${i + 1}`}>
                <div className={styles.whyNum}>{String(i+1).padStart(2,'0')}</div>
                <h3 className={styles.whyTitle}>{item.title}</h3>
                <p className={styles.whyDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section bg-surface-tinted">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-label">Client Voices</span>
            <h2 className="section-title">What Our Clients Say</h2>
          </div>
          <div className={styles.testimonialGrid}>
            {testimonials.map((t, i) => (
              <div key={i} className={`${styles.testimonialCard} anim-up d${i + 1}`}>
                <Quote size={28} className={styles.quoteIcon} />
                <p className={styles.testimonialQuote}>"{t.quote}"</p>
                <div className={styles.testimonialAuthor}>
                  <img src={t.avatar} alt={t.author} className={styles.testimonialAvatar} />
                  <div>
                    <strong className={styles.testimonialName}>{t.author}</strong>
                    <span className={styles.testimonialRole}>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO / BRAND STATEMENT ── */}
      <section className={styles.brandSection}>
        <div className={styles.brandOverlay} />
        <div className="container">
          <div className={styles.brandContent}>
            <span className="section-label" style={{color:'var(--color-accent-bright)'}}>Our Ethos</span>
            <h2 className={styles.brandTitle}>
              "We Don't Just Build Structures.<br />
              <em>We Build Legacies.</em>"
            </h2>
            <p className={styles.brandSub}>
              Every project we take on carries the weight of the communities that depend on it.
              That responsibility drives every decision we make.
            </p>
            <button className={styles.playBtn} aria-label="Watch our story">
              <Play size={20} fill="currentColor" />
              Watch Our Story
            </button>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection />
    </main>
  );
}
