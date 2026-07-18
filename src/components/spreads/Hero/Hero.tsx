import Image from 'next/image';
import { LiveClock } from '@/components/ui';
import SpreadContainer from '../_lib/SpreadContainer/SpreadContainer';
import styles from './Hero.module.css';
import Underline from '@/components/editorial/Underline/Underline';

const spreads = [
  { number: 1, title: 'Home' },
  { number: 2, title: 'Intro' },
  { number: 3, title: 'Work' },
  { number: 4, title: 'Thinking' },
  { number: 5, title: 'Writing' },
  { number: 6, title: 'About' },
];

const Hero = () => {
  return (
    <SpreadContainer tone='ink'>
      <aside className={styles.sectionsSidebar}>
        {/*
        TODO: The items in this list should be anchors to their appropriate sections.
              Need to figure out interactions first though
        */}
        <ul>
          {spreads.map((spread) => {
            return (
              <li key={spread.number}>
                <span>{spread.number.toString().padStart(2, '0')}</span>
                <span>{spread.title}</span>
              </li>
            );
          })}
        </ul>
        <div className={styles.scrollIndicator}>
          <span>
            Scroll
            <br />
            down
          </span>
          <span className={styles.scrollIndicatorTrack} aria-hidden='true' />
        </div>
      </aside>
      <div className={styles.heroHeadline}>
        <h1>
          Design-Led. Engineering-minded.{' '}
          <span>
            Curious <br />
            by nature
          </span>
        </h1>
        <Underline className={styles.underline} fill='var(--color-amethyst-400)' />
      </div>

      <div className={styles.heroContent}>
        <pre>I design and build digital products that are thoughtful, usable, and built to last.</pre>
        <hr />
        <p className={styles.locationMeta}>Based in Edinburgh, UK</p>
        <p>
          <LiveClock />
        </p>
      </div>
      <div className={styles.heroImage}>
        <Image className={styles.image} src='/assets/desk.jpeg' fill sizes='50vw' alt='My desk setup' loading='eager' />
      </div>
    </SpreadContainer>
  );
};

export default Hero;
