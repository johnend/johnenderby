import Image from 'next/image';
import Underline from '@/components/editorial/Underline/Underline';
import SpreadContainer from '../_lib/SpreadContainer/SpreadContainer';
import styles from './About.module.css';

const About = () => {
  return (
    <SpreadContainer id='about' className={styles.aboutSpread} composition='content' spreadTitle='About me'>
      <div className={styles.headlineContainer}>
        <p className={styles.aboutHeadline}>
          I started in design. <br /> I learned to build <br /> so I could <br />
          <span>see it through.</span>
          <Underline className={styles.underline} fill='var(--color-amethyst-500)' />
        </p>
      </div>
      <div className={styles.contentContainer}>
        <p>
          I spent the first decade of my career in product design. I learned to code because I wanted to understand what
          happened after handoff: where the compromises landed and whether the work survived production.
        </p>
        <p>
          Now I work across product design and front-end engineering, usually on products where the hard part is bigger
          than the interface. I’m based in Edinburgh and work remotely.
        </p>
      </div>
      <div className={styles.mainTexture}>
        <Image className={styles.mainTextureImage} src='/assets/about-texture-main.png' fill sizes='25vw' alt='' />
      </div>
      <div className={styles.accentTexture}>
        <Image className={styles.accentTextureImage} src='/assets/about-texture-accent.png' fill sizes='7vw' alt='' />
      </div>
      <figure className={styles.beachImage}>
        <Image
          className={styles.beach}
          src='/assets/home.png'
          fill
          sizes='25vw'
          alt='A rainbow over fields and autumn trees'
        />
        <figcaption>SCOTLAND. PLENTY OF ROOM TO GET AWAY FROM A SCREEN.</figcaption>
      </figure>
      <aside className={styles.outside}>
        <h3>Outside of work</h3>
        <p>Outside work, I’m usually lifting, playing golf, or turning a quick job into a project.</p>
      </aside>
    </SpreadContainer>
  );
};

export default About;
