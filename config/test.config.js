module.exports = {
  timeout: 60000,
  retries: process.env.CI ? 2 : 0,
  expect: {
    timeout: 10000
  }
};
