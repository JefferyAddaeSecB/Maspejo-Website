import { ShieldCheck, Award, Users, Hammer, Star, Building2 } from 'lucide-react';
import styles from './CredibilityStrip.module.css';

const items = [
  { Icon: Building2,  text: '200+ Projects Delivered' },
  { Icon: Users,      text: '500+ Happy Clients' },
  { Icon: Award,      text: 'GRC Certified' },
  { Icon: ShieldCheck,text: 'ISO 9001:2015' },
  { Icon: Hammer,     text: '15+ Years Experience' },
  { Icon: Star,       text: '4.9 / 5 Client Rating' },
  { Icon: Building2,  text: 'Pan-West Africa Presence' },
  { Icon: Award,      text: 'GHACOE Member' },
];

export default function CredibilityStrip() {
  return (
    <div className={styles.strip}>
      <div className={styles.track}>
        {/* Duplicate for seamless infinite scroll */}
        {[...items, ...items].map((item, i) => (
          <div key={i} className={styles.item}>
            <item.Icon size={16} className={styles.icon} />
            <span className={styles.text}>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
