import Link from 'next/link';
import styles from './Header.module.css';
const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <Link className={styles.initials} href='/#home' aria-label='Home'>
        JE
      </Link>
      <nav className={styles.navContainer}>
        <ul className={styles.navList}>
          <li>
            <Link href='/#work'>Work</Link>
          </li>
          <li>
            <Link href='/#about'>About</Link>
          </li>
          <li>
            <Link href='/#writing'>Writing</Link>
          </li>
          <li>
            <Link href='/#contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
