import SpreadContainer from '../_lib/SpreadContainer/SpreadContainer';
import styles from './Breather.module.css';

const Breather = () => {
  return (
    <SpreadContainer className={styles.breather} tone='paper' data-index-id='work' aria-labelledby='breather-heading'>
      <h2 id='breather-heading' className={styles.statement}>
        <span>Good products</span>
        <span>Aren’t made simpler</span>
        <span>by hiding complexity.</span>
        <span className={styles.secondThought}>They’re made clearer</span>
        <span className={styles.emphasis}>by giving it structure.</span>
      </h2>
    </SpreadContainer>
  );
};

export default Breather;
