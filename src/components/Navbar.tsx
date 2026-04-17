import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home',     path: '/' },
  { label: 'About',    path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'FAQ',      path: '/faq' },
  { label: 'Contact',  path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <span className={styles.logoMark}>M</span>
          <span className={styles.logoText}>
            <span className={styles.logoName}>Maspejo</span>
            <span className={styles.logoSub}>Company Limited</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`${styles.navLink} ${pathname === link.path ? styles.active : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className={styles.desktopCta}>
          <a href="tel:+233000000000" className={styles.phoneLink}>
            <Phone size={14} />
            +233 00 000 0000
          </a>
          <Link to="/contact" className="btn btn--primary btn--sm">
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={styles.menuBtn}
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`} aria-hidden={!open}>
        <nav className={styles.mobileNav}>
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`${styles.mobileLink} ${pathname === link.path ? styles.mobileActive : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className={styles.drawerCta}>
          <a href="tel:+233000000000" className={styles.drawerPhone}>
            <Phone size={15} />
            +233 00 000 0000
          </a>
          <Link to="/contact" className="btn btn--primary" style={{width:'100%', justifyContent:'center'}}>
            Request a Quote
          </Link>
        </div>
      </div>

      {/* Backdrop */}
      {open && <div className={styles.backdrop} onClick={() => setOpen(false)} />}
    </header>
  );
}
