import Image from 'next/image';
import Underline from '@/components/editorial/Underline/Underline';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer id='contact' className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.identity}>
          <span className={styles.initials}>JE</span>
          <div>
            <p>
              Product designer and front-end
              <br />
              engineer.
            </p>
            <p>Based in Edinburgh.</p>
          </div>
          <div className={styles.socials} aria-label='Social profiles'>
            <a href='https://github.com/johnend'>GitHub</a>
            <a href='https://www.linkedin.com/in/johnenderby/'>LinkedIn</a>
          </div>
        </div>

        <div className={styles.focus}>
          <p className={styles.label}>Focus</p>
          <ul>
            <li>Product design</li>
            <li>Interaction design</li>
            <li>Design systems</li>
            <li>Front-end engineering</li>
            <li>Prototyping</li>
          </ul>
        </div>

        <div className={styles.currently}>
          <p className={styles.label}>Currently</p>
          <p>Building products at FanDuel.</p>
        </div>

        <div className={styles.image}>
          <Image
            src='/assets/bench-on-chapel-green.JPG'
            fill
            sizes='(max-width: 48rem) 100vw, 18vw'
            alt='A bench on Chapel Green'
          />
        </div>

        <div className={styles.statement}>
          <p>
            Ask better questions.
            <br />
            Do the work properly.
          </p>
          <Underline className={styles.underline} fill='var(--color-amethyst-400)' />
        </div>
      </div>

      <div className={styles.meta}>
        <p>© 2026 John Enderby</p>
        <p>
          Edinburgh, UK <span aria-hidden='true' />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
