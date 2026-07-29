import Underline from '@/components/editorial/Underline/Underline';
import SpreadContainer from '../_lib/SpreadContainer/SpreadContainer';
import styles from './Intro.module.css';

const Intro = () => {
  return (
    <SpreadContainer spreadNumber={2} spreadTitle='An introduction'>
      <div className={styles.headlineContainer}>
        <p className={styles.introHeadline}>
          I turn complex product problems into <em>clear, useful</em> software.
          <Underline className={styles.underline} fill='var(--color-amethyst-500)' />
        </p>
      </div>

      <div className={styles.contentContainer}>
        <p>
          I work across product thinking, interaction design and frontend engineering. I start by understanding the
          problem, make ideas tangible early, and stay close to the detail until the result is coherent, buildable and
          ready to evolve.
        </p>
      </div>

      <div className={styles.visualBackdrop} aria-hidden='true' />
      <div className={styles.processStudy} aria-hidden='true'>
        <div className={styles.processHeader}>
          <span>Working model</span>
          <span>01—06</span>
        </div>
        <ol className={styles.processSteps}>
          <li>
            <span>01</span> Ask
          </li>
          <li>
            <span>02</span> Explore
          </li>
          <li>
            <span>03</span> Test
          </li>
          <li>
            <span>04</span> Build
          </li>
          <li>
            <span>05</span> Learn
          </li>
          <li>
            <span>06</span> Repeat
          </li>
        </ol>
        <p className={styles.processNote}>Make the problem visible. Find the next useful step.</p>
      </div>
      <div className={styles.accentSquare} aria-hidden='true' />
      <p className={styles.visualCaption}>Small pieces, clear purpose, one coherent whole.</p>
    </SpreadContainer>
  );
};

export default Intro;
