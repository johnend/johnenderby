import Link from 'next/link';
import styles from './Header.module.css';
const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <span className={styles.initials}>JE</span>
      <nav className={styles.navContainer}>
        <ul className={styles.navList}>
          <li>
            <Link href='#'>About</Link>
          </li>
          <li>
            <Link href='#'>Test</Link>
          </li>
          <li>
            <Link href='#'>Test</Link>
          </li>
          <li>
            <Link href='#'>Test</Link>
          </li>
          <li>
            <Link href='#'>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
