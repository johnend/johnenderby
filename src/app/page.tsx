import { About, Featured, Hero, Intro, Notes, Thinking } from '@components/spreads';
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Featured />
      <Thinking />
      <Notes />
      <About />
    </main>
  );
}
