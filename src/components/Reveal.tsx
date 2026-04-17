import React, { useRef, useEffect, useState } from 'react';
import type { ReactNode, CSSProperties } from 'react';

type Animation =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'fade-in'
  | 'zoom-in'
  | 'zoom-up'
  | 'flip-up'
  | 'slide-up';

interface RevealProps {
  children: ReactNode;
  animation?: Animation;
  delay?: number;       // ms
  duration?: number;    // ms
  threshold?: number;
  className?: string;
  style?: CSSProperties;
  as?: keyof React.JSX.IntrinsicElements;
}

const transforms: Record<Animation, { from: string; to: string }> = {
  'fade-up':    { from: 'translateY(48px)',           to: 'translateY(0)' },
  'fade-down':  { from: 'translateY(-48px)',          to: 'translateY(0)' },
  'fade-left':  { from: 'translateX(-56px)',          to: 'translateX(0)' },
  'fade-right': { from: 'translateX(56px)',           to: 'translateX(0)' },
  'fade-in':    { from: 'none',                       to: 'none' },
  'zoom-in':    { from: 'scale(0.88)',                to: 'scale(1)' },
  'zoom-up':    { from: 'scale(0.92) translateY(32px)', to: 'scale(1) translateY(0)' },
  'flip-up':    { from: 'perspective(600px) rotateX(18deg) translateY(32px)', to: 'perspective(600px) rotateX(0) translateY(0)' },
  'slide-up':   { from: 'translateY(64px)',           to: 'translateY(0)' },
};

export default function Reveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 650,
  threshold = 0.12,
  className,
  style,
  as: Tag = 'div',
}: RevealProps) {
  const ref   = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVis(true); observer.disconnect(); } },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const { from, to } = transforms[animation];

  const baseStyle: CSSProperties = {
    opacity:    vis ? 1 : 0,
    transform:  vis ? to : from,
    transition: `opacity ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
    willChange: 'opacity, transform',
    ...style,
  };

  // @ts-expect-error — dynamic tag
  return <Tag ref={ref} className={className} style={baseStyle}>{children}</Tag>;
}
