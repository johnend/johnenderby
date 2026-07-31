'use client';

import { useEffect, useState } from 'react';
import styles from './SpreadIndex.module.css';

const indexedSpreads = [
  { number: 1, label: 'Home', id: 'home' },
  { number: 2, label: 'Intro', id: 'intro' },
  { number: 3, label: 'Work', id: 'work' },
  // { number: 4, label: 'Process', id: 'thinking' },
  { number: 4, label: 'Writing', id: 'writing' },
  { number: 5, label: 'About', id: 'about' },
];

const SpreadIndex = () => {
  const [activeId, setActiveId] = useState('home');
  const [activeTone, setActiveTone] = useState<'paper' | 'ink'>('ink');

  useEffect(() => {
    const spreads = Array.from(document.querySelectorAll<HTMLElement>('[data-spread]'));
    const reducedMotion =
      typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion || !('IntersectionObserver' in window)) {
      spreads.forEach((spread) => {
        spread.dataset.reveal = 'visible';
      });
    } else {
      spreads.forEach((spread) => {
        spread.dataset.reveal = spread.getBoundingClientRect().top < window.innerHeight ? 'visible' : 'pending';
      });

      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).dataset.reveal = 'visible';
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
      );

      spreads.forEach((spread) => {
        if (spread.dataset.reveal !== 'visible') {
          revealObserver.observe(spread);
        }
      });

      return () => revealObserver.disconnect();
    }
  }, []);

  useEffect(() => {
    const spreads = Array.from(document.querySelectorAll<HTMLElement>('[data-spread]'));

    const updateActiveSpread = () => {
      const readingLine = window.innerHeight * 0.32;
      const currentSpread = spreads.find((spread) => {
        const bounds = spread.getBoundingClientRect();
        return bounds.top <= readingLine && bounds.bottom > readingLine;
      });
      const currentIndexId = currentSpread?.dataset.indexId ?? currentSpread?.id;

      if (currentIndexId && indexedSpreads.some(({ id }) => id === currentIndexId)) {
        setActiveId(currentIndexId);
      }

      if (currentSpread?.dataset.tone === 'paper' || currentSpread?.dataset.tone === 'ink') {
        setActiveTone(currentSpread.dataset.tone);
      }
    };

    updateActiveSpread();
    window.addEventListener('scroll', updateActiveSpread, { passive: true });
    window.addEventListener('resize', updateActiveSpread);

    return () => {
      window.removeEventListener('scroll', updateActiveSpread);
      window.removeEventListener('resize', updateActiveSpread);
    };
  }, []);

  return (
    <nav className={styles.index} data-tone={activeTone} aria-label='Page contents'>
      <ol>
        {indexedSpreads.map(({ number, label, id }) => (
          <li key={id}>
            <a href={`#${id}`} aria-current={activeId === id ? 'location' : undefined}>
              <span className={styles.number} aria-hidden='true'>
                {number.toString().padStart(2, '0')}
              </span>
              <span className={styles.label}>{label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default SpreadIndex;
