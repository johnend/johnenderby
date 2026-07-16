import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>John Enderby</p>
        <h1 className={styles.title}>Portfolio rebuild in progress</h1>
        <p className={styles.description}>
          This structure-only preview verifies the new Next.js foundation before portfolio content and design work
          begin.
        </p>
        <p className={styles.status} role='status'>
          <span className={styles.statusMark} aria-hidden='true' />
          Next.js foundation ready for review
        </p>
      </div>
    </main>
  );
}
