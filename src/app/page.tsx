import {
  About,
  Breather,
  Featured,
  Hero,
  Intro,
  Notes,
  // Thinking,
} from '@components/spreads';
import { SpreadIndex } from '@/components/ui';

export default function Home() {
  return (
    <>
      <SpreadIndex />
      <main>
        <Hero />
        <Intro />
        <Featured />
        <Breather />
        {/* <Thinking /> */}
        <Notes />
        <About />
      </main>
    </>
  );
}
