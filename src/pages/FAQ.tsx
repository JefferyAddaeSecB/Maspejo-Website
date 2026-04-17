import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Search, MessageSquare } from 'lucide-react';
import CTASection from '../components/CTASection';
import Reveal from '../components/Reveal';
import { faqs, faqCategories } from '../data/faqs';
import styles from './FAQ.module.css';

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIndex, setOpenIndex]           = useState<number | null>(null);
  const [query, setQuery]                   = useState('');

  const categories = ['All', ...faqCategories];

  const filtered = faqs.filter(faq => {
    const matchCat = activeCategory === 'All' || faq.category === activeCategory;
    const q = query.toLowerCase();
    const matchSearch = !q || faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i));

  return (
    <main className="page-top">
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroLabel}>FAQ</span>
            <div className={styles.heroHeading}>
              <div className={styles.heroBar} />
              <h1 className={styles.heroTitle}>
                Frequently Asked<br />
                <em className={styles.heroEm}>Questions</em>
              </h1>
            </div>
            <p className={styles.heroSub}>
              Quick answers to the questions we hear most. Can't find yours?
              Chat with Ama or contact our team directly.
            </p>
            <div className={styles.heroCrumb}>
              <Link to="/" className={styles.crumbLink}>Home</Link>
              <span>/</span>
              <span>FAQ</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEARCH + FILTER ── */}
      <section className={`section bg-surface`}>
        <div className="container">
          <Reveal animation="fade-up" duration={700}>
          <div className={styles.controls}>
            {/* Search */}
            <div className={styles.searchWrap}>
              <Search size={18} className={styles.searchIcon} />
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Search questions…"
                value={query}
                onChange={e => { setQuery(e.target.value); setOpenIndex(null); }}
              />
              {query && (
                <button className={styles.clearBtn} onClick={() => setQuery('')}>✕</button>
              )}
            </div>

            {/* Category pills */}
            <div className={styles.pills}>
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`${styles.pill} ${activeCategory === cat ? styles.pillActive : ''}`}
                  onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
                >
                  {cat}
                  <span className={styles.pillCount}>
                    {cat === 'All' ? faqs.length : faqs.filter(f => f.category === cat).length}
                  </span>
                </button>
              ))}
            </div>
          </div>
          </Reveal>

          {/* Results count */}
          {(query || activeCategory !== 'All') && (
            <p className={styles.resultsCount}>
              {filtered.length} result{filtered.length !== 1 ? 's' : ''}
              {query && <> for "<strong>{query}</strong>"</>}
            </p>
          )}

          {/* Accordion */}
          {filtered.length > 0 ? (
            <div className={styles.accordion}>
              {filtered.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <Reveal key={i} animation="fade-up" delay={i < 6 ? i * 60 : 0} duration={550}>
                  <div
                    className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}
                  >
                    <button
                      className={styles.question}
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                    >
                      <span className={styles.questionText}>{faq.question}</span>
                      <span className={styles.catTag}>{faq.category}</span>
                      <ChevronDown
                        size={20}
                        className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
                      />
                    </button>
                    <div
                      className={styles.answerWrap}
                      style={{ '--height': isOpen ? 'auto' : '0px' } as React.CSSProperties}
                    >
                      <div className={styles.answer}>
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                  </Reveal>
                );
              })}
            </div>
          ) : (
            <div className={styles.empty}>
              <Search size={40} className={styles.emptyIcon} />
              <h3>No results found</h3>
              <p>Try a different search term or category, or ask Ama directly.</p>
            </div>
          )}

          {/* Still have questions? */}
          <Reveal animation="zoom-up" delay={100} duration={700}>
          <div className={styles.stillBox}>
            <MessageSquare size={28} className={styles.stillIcon} />
            <div>
              <h3 className={styles.stillTitle}>Still have a question?</h3>
              <p className={styles.stillDesc}>
                Our team responds to all enquiries within 24 hours — or chat with Ama right now using the button in the corner.
              </p>
            </div>
            <Link to="/contact" className="btn btn--primary">
              Contact Us
            </Link>
          </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Ready to Start Your Project?"
        subtitle="Get in touch for a free consultation and budget estimate from our senior project team."
        primaryLabel="Request a Consultation"
        primaryTo="/contact"
      />
    </main>
  );
}
