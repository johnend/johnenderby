import Image from 'next/image';
import Underline from '@/components/editorial/Underline/Underline';
import SpreadContainer from '../_lib/SpreadContainer/SpreadContainer';
import styles from './About.module.css';

const About = () => {
  return (
    <SpreadContainer spreadNumber={6} spreadTitle='About me'>
      <div className={styles.headlineContainer}>
        <p className={styles.aboutHeadline}>
          Designer. <br /> Engineer. <br /> Problem solver. <br />
          <span>Always learning.</span>
          <Underline className={styles.underline} fill='var(--color-amethyst-500)' />
        </p>
      </div>
      <div className={styles.contentContainer}>
        <p>
          I&apos;m based in Edinburgh, Scotland, with a background in product design and frontend engineering. I care
          about clear thinking, useful systems and the craft of building things that last.
        </p>
      </div>
      <div className={styles.mainTexture}>
        <Image className={styles.mainTextureImage} src='/assets/about-texture-main.png' fill sizes='25vw' alt='' />
      </div>
      <div className={styles.accentTexture}>
        <Image className={styles.accentTextureImage} src='/assets/about-texture-accent.png' fill sizes='7vw' alt='' />
      </div>
      <div className={styles.beachImage}>
        <Image className={styles.beach} src='/assets/beach.JPG' fill sizes='25vw' alt='Elie beach on a summer day' />
      </div>
      <aside className={styles.outside}>
        <h3>Outside of work</h3>
        <p>
          You&apos;ll usually find me lifting weights, playing golf, in the mountains, or cooking something slow over
          fire.
        </p>
      </aside>
    </SpreadContainer>
  );
};

export default About;
