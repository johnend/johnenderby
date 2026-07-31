import Image from 'next/image';
import { LiveClock } from '@/components/ui';
import SpreadContainer from '../_lib/SpreadContainer/SpreadContainer';
import styles from './Hero.module.css';
import Underline from '@/components/editorial/Underline/Underline';

const Hero = () => {
  return (
    <SpreadContainer id='home' tone='ink'>
      <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <span className={styles.scrollIndicatorTrack} aria-hidden='true' />
      </div>
      <div className={styles.heroHeadline}>
        <h1>
          Design-led.
          <br />
          Engineering-minded.
          <br />
          <span>Curious by nature.</span>
        </h1>
        <Underline className={styles.underline} fill='var(--color-amethyst-400)' />
      </div>

      <div className={styles.heroContent}>
        <p className={styles.captionLabel}>Desk notes / 01</p>
        <p className={styles.heroIntroduction}>
          I design products and build interfaces. The interesting work is everything in between.
        </p>
        <hr />
        <p className={styles.locationMeta}>Edinburgh, Scotland</p>
        <p>
          <LiveClock />
        </p>
      </div>
      <div className={styles.heroImage}>
        <Image className={styles.image} src='/assets/desk.jpeg' fill sizes='65vw' alt='My desk setup' priority />
      </div>
    </SpreadContainer>
  );
};

export default Hero;
