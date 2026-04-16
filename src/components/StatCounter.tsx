import { useEffect, useRef, useState } from 'react';
import styles from './StatCounter.module.css';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description?: string;
}

interface Props {
  stats: StatItem[];
  dark?: boolean;
}

function useCountUp(target: number, duration = 2000, trigger: boolean) {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration, trigger]);
  return current;
}

function StatItem({ stat, dark, trigger }: { stat: StatItem; dark?: boolean; trigger: boolean }) {
  const count = useCountUp(stat.value, 2200, trigger);
  return (
    <div className={`${styles.stat} ${dark ? styles.dark : ''}`}>
      <div className={styles.value}>
        <span className={styles.number}>{count}</span>
        <span className={styles.suffix}>{stat.suffix}</span>
      </div>
      <div className={styles.label}>{stat.label}</div>
      {stat.description && <p className={styles.desc}>{stat.description}</p>}
    </div>
  );
}

export default function StatCounter({ stats, dark = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${styles.grid} ${dark ? styles.gridDark : ''}`}>
      {stats.map((s, i) => (
        <StatItem key={i} stat={s} dark={dark} trigger={triggered} />
      ))}
    </div>
  );
}
