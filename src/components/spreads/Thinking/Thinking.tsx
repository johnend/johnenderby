import Image from 'next/image';
import Underline from '@/components/editorial/Underline/Underline';
import SpreadContainer from '../_lib/SpreadContainer/SpreadContainer';
import styles from './Thinking.module.css';

const processSteps = [
  {
    title: 'Understand deeply',
    description: 'Context, people and problems before solutions.',
  },
  {
    title: 'Simplify intentionally',
    description: 'Find the essence. Remove what does not matter.',
  },
  {
    title: 'Design with clarity',
    description: 'Make the complex feel effortless.',
  },
  {
    title: 'Build with care',
    description: 'Turn the idea into reality. Quality lives in the details.',
  },
  {
    title: 'Iterate and learn',
    description: 'Ship, measure, learn and begin again.',
  },
];

const Thinking = () => {
  return (
    <SpreadContainer id='thinking' composition='content' spreadTitle='How I work'>
      <div className={styles.headlineContainer}>
        <p className={styles.headline}>
          A process
          <br />
          rooted in <em>empathy</em> and <em>systems thinking.</em>
        </p>
        <Underline className={styles.headlineUnderline} fill='var(--color-amethyst-500)' />
        <blockquote className={styles.processIntroduction}>
          The work is not to flatten complexity. It is to understand enough of it to make the next decision clear.
        </blockquote>
      </div>

      <figure className={styles.notebookFigure}>
        <div className={styles.imagePanel}>
          <Image
            className={styles.image}
            src='/assets/process-notebook.webp'
            fill
            sizes='(max-width: 48rem) 92vw, 64vw'
            alt='An open notebook filled with hand-drawn systems diagrams'
          />
        </div>
        <figcaption>Working notes: relationships, constraints and the shape of the whole.</figcaption>
      </figure>

      <ul className={styles.processPrinciples} aria-label='Five process principles'>
        {processSteps.map((step) => (
          <li key={step.title}>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ul>
    </SpreadContainer>
  );
};

export default Thinking;
