import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import styles from './CTASection.module.css';

interface Props {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTASection({
  title = "Ready to Build Something Remarkable?",
  subtitle = "From the first concept to the final inspection — Maspejo delivers excellence at every stage. Let's discuss your next project.",
  primaryLabel = "Start Your Project",
  primaryTo = "/contact",
  secondaryLabel = "Call Us Now",
  secondaryHref = "tel:+233000000000",
}: Props) {
  return (
    <section className={styles.cta}>
      {/* Texture overlay */}
      <div className={styles.texture} />

      <div className="container">
        <div className={styles.inner}>
          <div className={styles.content}>
            <span className={styles.label}>Let's Build Together</span>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
          <div className={styles.actions}>
            <Link to={primaryTo} className="btn btn--primary btn--lg">
              {primaryLabel}
              <ArrowRight size={18} />
            </Link>
            <a href={secondaryHref} className="btn btn--outline btn--lg">
              <Phone size={18} />
              {secondaryLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
