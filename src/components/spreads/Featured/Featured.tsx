import Image from 'next/image';
import SpreadContainer from '../_lib/SpreadContainer/SpreadContainer';
import styles from './Featured.module.css';

const Featured = () => {
  return (
    <SpreadContainer className={styles.featuredSpread} spreadNumber={3} spreadTitle='Featured work' tone='ink'>
      <div className={styles.nebulaField} aria-hidden='true'>
        <Image className={styles.nebulaImage} src='/assets/fanduel/nebula.png' fill sizes='100vw' alt='' />
      </div>

      <div className={styles.projectSummary}>
        <p className={styles.projectLabel}>FanDuel / Free-to-play</p>
        <h3 className={styles.projectName}>FanDuel</h3>
        <p className={styles.projectTagline}>Free-to-play, designed from the ground up.</p>
        <p className={styles.projectDescription}>
          Across seven years at FanDuel, my role has continued to evolve. Free-to-Play remains one of the clearest
          examples of my end-to-end design ownership. I shaped both the game formats and internal tooling from first
          principles, balancing the player experience with the operational detail required to launch games repeatedly.
        </p>
      </div>

      <div className={styles.visualField}>
        <div className={styles.gameListFrame}>
          <Image
            className={styles.productImage}
            src='/assets/fanduel/f2p-admin.png'
            fill
            sizes='30vw'
            alt='FanDuel Free-to-Play admin platform showing a list of games and their launch status'
          />
        </div>
        <div className={styles.creationFrame}>
          <Image
            className={styles.productImage}
            src='/assets/fanduel/create-game.png'
            fill
            sizes='34vw'
            alt='FanDuel Free-to-Play game creation workflow showing game details and launch stages'
          />
        </div>
        <div className={styles.gameFrame}>
          <Image
            className={styles.gameImage}
            src='/assets/fanduel/win-from-home.png'
            fill
            sizes='18vw'
            alt='FanDuel Win From Home Free-to-Play game displayed on a phone'
          />
        </div>
      </div>

      <dl className={styles.projectFacts}>
        <div>
          <dt>At FanDuel</dt>
          <dd>7 years</dd>
        </div>
        <div>
          <dt>Product design ownership</dt>
          <dd>End to end</dd>
        </div>
        <div>
          <dt>Launch workflow</dt>
          <dd>2+ weeks → hours</dd>
        </div>
      </dl>
    </SpreadContainer>
  );
};

export default Featured;
