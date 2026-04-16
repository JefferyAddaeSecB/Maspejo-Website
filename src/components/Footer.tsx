import { Link } from 'react-router-dom';
import {
  MapPin, Phone, Mail, Globe, Share2, Rss, AtSign,
  ArrowRight, Clock
} from 'lucide-react';
import styles from './Footer.module.css';

const services = [
  'Building Construction',
  'Civil Engineering',
  'Road & Infrastructure',
  'Project Management',
  'Renovation & Retrofit',
  'Structural Consulting',
];

const quickLinks = [
  { label: 'Home',            path: '/' },
  { label: 'About Us',        path: '/about' },
  { label: 'Our Services',    path: '/services' },
  { label: 'Project Portfolio', path: '/projects' },
  { label: 'Contact Us',      path: '/contact' },
];

const offices = [
  {
    city: 'Accra HQ',
    address: '12 Independence Ave, Airport Residential, Accra',
    phone: '+233 24 000 0001',
    email: 'accra@maspejo.com',
  },
  {
    city: 'Kumasi',
    address: '5 Harper Road, Adum, Kumasi, Ashanti',
    phone: '+233 24 000 0002',
    email: 'kumasi@maspejo.com',
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top amber bar */}
      <div className={styles.topBar} />

      <div className={styles.main}>
        <div className="container">
          <div className={styles.grid}>
            {/* Col 1 — Brand */}
            <div className={styles.brand}>
              <Link to="/" className={styles.logo}>
                <span className={styles.logoMark}>M</span>
                <span>
                  <span className={styles.logoName}>Maspejo</span>
                  <span className={styles.logoSub}>Company Limited</span>
                </span>
              </Link>
              <p className={styles.tagline}>
                Building Ghana's future with integrity, precision, and enduring craftsmanship since 2008.
              </p>
              <div className={styles.social}>
                {[
                  { Icon: Globe,   href: '#', label: 'Website' },
                  { Icon: Share2,  href: '#', label: 'LinkedIn' },
                  { Icon: AtSign,  href: '#', label: 'Twitter' },
                  { Icon: Rss,     href: '#', label: 'Blog' },
                ].map(({ Icon, href, label }) => (
                  <a key={label} href={href} className={styles.socialLink} aria-label={label}>
                    <Icon size={16} />
                  </a>
                ))}
              </div>
              <div className={styles.certBadge}>
                <span className="badge badge--dark">GRC Certified</span>
                <span className="badge badge--dark">ISO 9001</span>
              </div>
            </div>

            {/* Col 2 — Services */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Our Services</h4>
              <ul className={styles.linkList}>
                {services.map(s => (
                  <li key={s}>
                    <Link to="/services" className={styles.footLink}>
                      <ArrowRight size={12} />
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Quick Links */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Quick Links</h4>
              <ul className={styles.linkList}>
                {quickLinks.map(l => (
                  <li key={l.path}>
                    <Link to={l.path} className={styles.footLink}>
                      <ArrowRight size={12} />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className={styles.hoursBox}>
                <Clock size={14} />
                <div>
                  <p className={styles.hoursTitle}>Working Hours</p>
                  <p className={styles.hoursText}>Mon – Fri: 7:00 AM – 6:00 PM</p>
                  <p className={styles.hoursText}>Sat: 8:00 AM – 2:00 PM</p>
                </div>
              </div>
            </div>

            {/* Col 4 & 5 — Offices */}
            {offices.map(office => (
              <div key={office.city} className={styles.col}>
                <h4 className={styles.colTitle}>{office.city}</h4>
                <ul className={styles.contactList}>
                  <li className={styles.contactItem}>
                    <MapPin size={14} className={styles.contactIcon} />
                    <span>{office.address}</span>
                  </li>
                  <li className={styles.contactItem}>
                    <Phone size={14} className={styles.contactIcon} />
                    <a href={`tel:${office.phone.replace(/\s/g,'')}`} className={styles.contactLink}>
                      {office.phone}
                    </a>
                  </li>
                  <li className={styles.contactItem}>
                    <Mail size={14} className={styles.contactIcon} />
                    <a href={`mailto:${office.email}`} className={styles.contactLink}>
                      {office.email}
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copy}>
              © {new Date().getFullYear()} Maspejo Company Limited. All rights reserved.
            </p>
            <div className={styles.bottomLinks}>
              <a href="#" className={styles.bottomLink}>Privacy Policy</a>
              <span className={styles.dot}>·</span>
              <a href="#" className={styles.bottomLink}>Terms of Service</a>
              <span className={styles.dot}>·</span>
              <a href="#" className={styles.bottomLink}>Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
