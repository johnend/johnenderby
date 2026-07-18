import type { Metadata } from 'next';
import '@/styles/index.css';
import { Lora, Special_Gothic, Instrument_Sans, JetBrains_Mono } from 'next/font/google';
import { Footer, Header } from '@/components/ui';

const specialGothic = Special_Gothic({
  variable: '--font-special-gothic',
  subsets: ['latin'],
  axes: ['wdth'],
  fallback: ['system-ui', 'sans-serif'],
  adjustFontFallback: false,
});

const lora = Lora({
  variable: '--font-lora',
  weight: '500',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  fallback: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
  adjustFontFallback: false,
});

const instrumentSans = Instrument_Sans({
  variable: '--font-instrument-sans',
  subsets: ['latin'],
  axes: ['wdth'],
  fallback: ['system-ui', 'sans-serif'],
  adjustFontFallback: false,
});

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jet-brains-mono',
  subsets: ['latin'],
  fallback: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'consolas', 'Liberation Mono', 'monospace'],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: 'John Enderby — Portfolio',
  description: 'Structure-only deployment preview for the John Enderby portfolio rebuild.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang='en'
      className={`${specialGothic.variable} ${lora.variable} ${instrumentSans.variable} ${jetBrainsMono.variable}`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
