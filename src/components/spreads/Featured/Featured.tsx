import Image from 'next/image';
import SpreadContainer from '../_lib/SpreadContainer/SpreadContainer';
import styles from './Featured.module.css';

const Featured = () => {
  return (
    <SpreadContainer
      id='work'
      className={styles.featuredSpread}
      composition='content'
      spreadTitle='Featured work'
      tone='ink'
    >
      <div className={styles.nebulaField} aria-hidden='true'>
        <Image className={styles.nebulaImage} src='/assets/fanduel/nebula.png' fill sizes='100vw' alt='' />
      </div>

      <div className={styles.projectSummary}>
        <p className={styles.projectLabel}>FanDuel / Free-to-play</p>
        <h3 className={styles.projectName}>FanDuel</h3>
        <p className={styles.projectTagline}>Rebuilding free-to-play from the ground up.</p>
        <p className={styles.projectDescription}>
          Launching FanDuel’s free-to-play games was slow and fragmented. I designed a new platform end to end, cutting
          setup from more than two weeks to a matter of hours.
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
          <dt>Design scope</dt>
          <dd>End to end</dd>
        </div>
        <div>
          <dt>Setup time</dt>
          <dd>2+ weeks → hours</dd>
        </div>
      </dl>
    </SpreadContainer>
  );
};

export default Featured;
