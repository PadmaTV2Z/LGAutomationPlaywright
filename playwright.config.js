const { defineConfig, devices } = require('@playwright/test');
const environments = require('./config/environments.json');

const envAliases = {
  qa: 'dev',
  uat: 'staging',
  prod: 'prod',
  dev: 'dev',
  staging: 'staging'
};

const requestedEnv = (process.env.TEST_ENV || process.env.NODE_ENV || 'dev').toLowerCase();
const env = envAliases[requestedEnv] || 'dev';
const baseURL = environments[env]?.baseURL || environments.dev.baseURL;

module.exports = defineConfig({
  testDir: './tests',
  timeout: 60000,
  expect: {
    timeout: 10000
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html'], ['list']],
  use: {
    baseURL,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 15000,
    navigationTimeout: 30000
  },
  metadata: {
    environment: env
  },
  projects: [
    {
      name: 'chromium-webos',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
        viewport: { width: 1920, height: 1080 }
      }
    }
  ]
});
