import Link from 'next/link';
import styles from './page.module.css';

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>404</p>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.description}>This route is not part of the structure-only portfolio preview.</p>
        <Link className={styles.link} href='/'>
          Return to the rebuild status
        </Link>
      </div>
    </main>
  );
}
