import Image from 'next/image';
import Underline from '@/components/editorial/Underline/Underline';
import SpreadContainer from '../_lib/SpreadContainer/SpreadContainer';
import styles from './Notes.module.css';

const Notes = () => {
  return (
    <SpreadContainer id='writing' composition='content' spreadTitle='Writing' tone='ink'>
      <div className={styles.intro}>
        <p className={styles.headline}>Notes on building better things.</p>
        <Underline className={styles.underline} fill='var(--color-amethyst-400)' />
        <p className={styles.introCopy}>
          Things I’ve learned, things I’m still working out, and a few opinions on how software gets made.
        </p>
        <p className={styles.moreArticles}>
          All writing <span aria-hidden='true'>→</span>
        </p>
      </div>

      <div className={styles.articles}>
        <article className={styles.featuredArticle}>
          <figure className={styles.featureArtwork}>
            <Image
              className={styles.featureImage}
              src='/assets/desk.jpeg'
              fill
              sizes='(max-width: 48rem) 92vw, 34vw'
              alt='A close crop of my desk, keyboard and development setup'
            />
            <figcaption>Design and implementation, kept in the same frame.</figcaption>
          </figure>
          <div className={styles.featureContent}>
            <p className={styles.category}>Engineering</p>
            <h3>The case for design-minded engineering</h3>
            <p className={styles.excerpt}>
              Why the strongest product work treats design and implementation as one continuous craft.
            </p>
            <p className={styles.meta}>Draft essay</p>
          </div>
        </article>

        <article className={styles.secondaryArticle}>
          <div className={styles.secondaryContent}>
            <p className={styles.category}>Design systems</p>
            <h3>Building systems that survive real products</h3>
            <p className={styles.secondaryExcerpt}>
              A design system only becomes useful when it can absorb the pressure and ambiguity of product work.
            </p>
            <p className={styles.meta}>Draft essay</p>
          </div>
        </article>

        <article className={styles.secondaryArticle}>
          <div className={styles.secondaryContent}>
            <p className={styles.category}>Frontend</p>
            <h3>From early sketches to production code</h3>
            <p className={styles.secondaryExcerpt}>
              Staying close to implementation changes what gets designed—and usually makes the result better.
            </p>
            <p className={styles.meta}>Draft essay</p>
          </div>
        </article>
      </div>
    </SpreadContainer>
  );
};

export default Notes;
