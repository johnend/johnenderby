import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/vitest/setup.ts'],
  },
});
