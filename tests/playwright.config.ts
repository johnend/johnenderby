import { defineConfig } from '@playwright/test';

const viewports = [
  { name: 'mobile-390x844', width: 390, height: 844 },
  { name: 'tablet-768x1024', width: 768, height: 1024 },
  { name: 'laptop-1280x720', width: 1280, height: 720 },
  { name: 'desktop-1440x900', width: 1440, height: 900 },
  { name: 'wide-1920x1080', width: 1920, height: 1080 },
];

export default defineConfig({
  testDir: './playwright',
  outputDir: '../test-results/playwright',
  fullyParallel: true,
  reporter: [['list'], ['html', { open: 'never', outputFolder: '../playwright-report' }]],
  use: {
    baseURL: 'http://127.0.0.1:3100',
    deviceScaleFactor: 1,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  webServer: {
    command: 'pnpm start --port 3100',
    url: 'http://127.0.0.1:3100',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
  projects: viewports.map(({ name, width, height }) => ({
    name,
    use: {
      viewport: { width, height },
    },
  })),
});
