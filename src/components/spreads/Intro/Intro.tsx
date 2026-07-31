import Image from 'next/image';
import Underline from '@/components/editorial/Underline/Underline';
import SpreadContainer from '../_lib/SpreadContainer/SpreadContainer';
import styles from './Intro.module.css';

const Intro = () => {
  return (
    <SpreadContainer id='intro' className={styles.introSpread} composition='content' spreadTitle='The working model'>
      <div className={styles.headlineContainer}>
        <p className={styles.introHeadline}>
          The work
          <br />
          always starts
          <br />
          with <em>understanding.</em>
        </p>
        <Underline className={styles.underline} fill='var(--color-amethyst-500)' />

        <div className={styles.introductionCopy}>
          <p>
            Before I reach for a solution, I want to know what the <em>problem actually is</em>, who it affects and what
            is making it difficult.
          </p>
          <p>I’d rather spend longer framing the right problem than move quickly on the wrong one.</p>
        </div>
      </div>

      <figure className={styles.notebookFigure}>
        <Image
          className={styles.notebookImage}
          src='/assets/notebook-workflow.png'
          width={1086}
          height={1448}
          sizes='(max-width: 42rem) 100vw, (max-width: 64rem) 75vw, 45vw'
          alt='An open notebook showing a six-step working model: ask, explore, test, build, learn and repeat'
        />
        <figcaption className={styles.workingNote}>
          <h3>Working note</h3>
          <p>Most of the important decisions happen long before there’s anything to click.</p>
        </figcaption>
      </figure>
    </SpreadContainer>
  );
};

export default Intro;
