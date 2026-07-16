import Link from 'next/link';
import styles from './Header.module.css';
type Props = {};

const Header = (props: Props) => {
  return (
    <div className={styles.headerContainer}>
      <span className={styles.initials}>JE</span>
      <nav>
        <ul>
          <Link href='#'>
            <li></li>
          </Link>
          <Link href='#'>
            <li></li>
          </Link>
          <Link href='#'>
            <li></li>
          </Link>
          <Link href='#'>
            <li></li>
          </Link>
          <Link href='#'>
            <li></li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
