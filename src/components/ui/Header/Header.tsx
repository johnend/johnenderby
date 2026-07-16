import styles from './Header.module.css';
type Props = {};

const Header = (props: Props) => {
  return (
    <div className={styles.headerContainer}>
      <span>JE</span>
      <nav>
        <ul>
          <li>Work</li>
          <li>About</li>
          <li>Notes</li>
          <li>Writing</li>
          <li>Notes</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
