import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import styles from './Contact.module.css';

const offices = [
  {
    city: 'Accra — Head Office',
    address: '12 Independence Avenue, Airport Residential Area, Accra, Greater Accra Region',
    phone: '+233 24 000 0001',
    email: 'accra@maspejo.com',
    hours: 'Mon–Fri: 7:00 AM – 6:00 PM',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127297.36!2d-0.2057!3d5.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra!5e0!3m2!1sen!2sgh!4v1680000000000',
  },
  {
    city: 'Kumasi — Regional Office',
    address: '5 Harper Road, Adum, Kumasi, Ashanti Region',
    phone: '+233 24 000 0002',
    email: 'kumasi@maspejo.com',
    hours: 'Mon–Fri: 7:30 AM – 5:30 PM',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127297.36!2d-1.6235!3d6.6885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb96f4a5c7b5ef%3A0x5c8e10d6e1be1ae2!2sKumasi!5e0!3m2!1sen!2sgh!4v1680000000000',
  },
];

const reasons = [
  { icon: '🏗️', label: 'New Construction Project' },
  { icon: '🌉', label: 'Civil Engineering Work' },
  { icon: '🛣️', label: 'Road / Infrastructure' },
  { icon: '🔨', label: 'Renovation / Retrofit' },
  { icon: '📋', label: 'Project Management' },
  { icon: '📐', label: 'Structural Consulting' },
  { icon: '💬', label: 'General Enquiry' },
];

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  reason: string;
  budget: string;
  message: string;
}

const initialForm: FormData = {
  name: '', company: '', email: '', phone: '',
  reason: '', budget: '', message: '',
};

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!form.name.trim())    e.name    = 'Full name is required.';
    if (!form.email.trim())   e.email   = 'Email address is required.';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Please enter a valid email.';
    if (!form.message.trim()) e.message = 'Please tell us about your project.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Simulate async submit
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm(initialForm);
    }, 1400);
  };

  return (
    <main className="page-top">
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroLabel}>Get In Touch</span>
            <div className={styles.heroHeading}>
              <div className={styles.heroBar} />
              <h1 className={styles.heroTitle}>
                Let's Start Your<br />
                <em className={styles.heroEm}>Next Project Together</em>
              </h1>
            </div>
            <p className={styles.heroSub}>
              Reach out to our team for a no-obligation consultation. We respond to all
              enquiries within 24 hours.
            </p>
            <div className={styles.heroCrumb}>
              <Link to="/" className={styles.crumbLink}>Home</Link>
              <span>/</span>
              <span>Contact</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK CONTACT BAR ── */}
      <div className={styles.quickBar}>
        <div className="container">
          <div className={styles.quickInner}>
            {[
              { Icon: Phone, text: '+233 24 000 0001', href: 'tel:+233240000001', label: 'Call Us' },
              { Icon: Mail,  text: 'info@maspejo.com', href: 'mailto:info@maspejo.com', label: 'Email Us' },
              { Icon: Clock, text: 'Mon–Fri: 7AM – 6PM', href: '#', label: 'Office Hours' },
            ].map(({ Icon, text, href, label }) => (
              <a key={label} href={href} className={styles.quickItem}>
                <div className={styles.quickIcon}><Icon size={18} /></div>
                <div>
                  <span className={styles.quickLabel}>{label}</span>
                  <span className={styles.quickText}>{text}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN CONTACT SECTION ── */}
      <section className="section bg-surface">
        <div className="container">
          <div className={styles.mainGrid}>
            {/* ─ FORM COLUMN ─ */}
            <div className={styles.formCol}>
              <span className="section-label">Send Us a Message</span>
              <h2 className={styles.formTitle}>Request a Consultation</h2>
              <p className={styles.formSubtitle}>
                Fill in the form and one of our senior project consultants will be in touch.
              </p>

              {submitted ? (
                <div className={styles.successBox}>
                  <CheckCircle size={40} className={styles.successIcon} />
                  <h3>Message Received!</h3>
                  <p>
                    Thank you for reaching out. A member of our team will contact you within
                    24 business hours to discuss your project.
                  </p>
                  <button className="btn btn--outline-dark" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                  <div className={styles.formRow}>
                    <div className={styles.fieldGroup}>
                      <label className={styles.label} htmlFor="name">Full Name *</label>
                      <input
                        id="name" name="name" type="text"
                        className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                        placeholder="Emmanuel Asante"
                        value={form.name} onChange={handleChange}
                      />
                      {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
                    </div>
                    <div className={styles.fieldGroup}>
                      <label className={styles.label} htmlFor="company">Company / Organisation</label>
                      <input
                        id="company" name="company" type="text"
                        className={styles.input}
                        placeholder="Ashanti Developments Ltd"
                        value={form.company} onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.fieldGroup}>
                      <label className={styles.label} htmlFor="email">Email Address *</label>
                      <input
                        id="email" name="email" type="email"
                        className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                        placeholder="you@example.com"
                        value={form.email} onChange={handleChange}
                      />
                      {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
                    </div>
                    <div className={styles.fieldGroup}>
                      <label className={styles.label} htmlFor="phone">Phone Number</label>
                      <input
                        id="phone" name="phone" type="tel"
                        className={styles.input}
                        placeholder="+233 24 000 0000"
                        value={form.phone} onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.fieldGroup}>
                      <label className={styles.label} htmlFor="reason">Project Type</label>
                      <select
                        id="reason" name="reason"
                        className={styles.select}
                        value={form.reason} onChange={handleChange}
                      >
                        <option value="">Select a service...</option>
                        {reasons.map(r => (
                          <option key={r.label} value={r.label}>{r.icon} {r.label}</option>
                        ))}
                      </select>
                    </div>
                    <div className={styles.fieldGroup}>
                      <label className={styles.label} htmlFor="budget">Estimated Budget</label>
                      <select
                        id="budget" name="budget"
                        className={styles.select}
                        value={form.budget} onChange={handleChange}
                      >
                        <option value="">Select a range...</option>
                        <option>Under GHS 500K</option>
                        <option>GHS 500K – 2M</option>
                        <option>GHS 2M – 10M</option>
                        <option>GHS 10M – 50M</option>
                        <option>GHS 50M – 100M</option>
                        <option>GHS 100M+</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label className={styles.label} htmlFor="message">Project Details *</label>
                    <textarea
                      id="message" name="message"
                      className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                      rows={5}
                      placeholder="Tell us about your project — location, scope, timeline, and any specific requirements..."
                      value={form.message} onChange={handleChange}
                    />
                    {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
                  </div>

                  <button
                    type="submit"
                    className={`btn btn--primary btn--lg ${styles.submitBtn}`}
                    disabled={loading}
                  >
                    {loading ? (
                      <span className={styles.loader} />
                    ) : (
                      <>
                        <Send size={18} />
                        Send Enquiry
                      </>
                    )}
                  </button>

                  <p className={styles.formNote}>
                    We respect your privacy. Your information will never be shared with third parties.
                  </p>
                </form>
              )}
            </div>

            {/* ─ INFO COLUMN ─ */}
            <div className={styles.infoCol}>
              <span className="section-label">Our Offices</span>
              <h2 className={styles.infoTitle}>Find Us</h2>

              {offices.map(office => (
                <div key={office.city} className={styles.officeCard}>
                  <h3 className={styles.officeCity}>{office.city}</h3>
                  <ul className={styles.officeList}>
                    <li className={styles.officeItem}>
                      <MapPin size={15} className={styles.officeIcon} />
                      <span>{office.address}</span>
                    </li>
                    <li className={styles.officeItem}>
                      <Phone size={15} className={styles.officeIcon} />
                      <a href={`tel:${office.phone.replace(/\s/g,'')}`} className={styles.officeLink}>
                        {office.phone}
                      </a>
                    </li>
                    <li className={styles.officeItem}>
                      <Mail size={15} className={styles.officeIcon} />
                      <a href={`mailto:${office.email}`} className={styles.officeLink}>
                        {office.email}
                      </a>
                    </li>
                    <li className={styles.officeItem}>
                      <Clock size={15} className={styles.officeIcon} />
                      <span>{office.hours}</span>
                    </li>
                  </ul>
                  <div className={styles.mapWrap}>
                    <iframe
                      src={office.mapSrc}
                      title={`Map of ${office.city}`}
                      className={styles.map}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              ))}

              {/* Social proof */}
              <div className={styles.proofBox}>
                <div className={styles.proofStars}>★★★★★</div>
                <p className={styles.proofText}>
                  "Maspejo's team responded within two hours and had a full proposal
                  on my desk by the next morning. Exceptional service from first contact."
                </p>
                <span className={styles.proofAuthor}>— Kwame Amponsah, CEO, Horizon Properties</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
