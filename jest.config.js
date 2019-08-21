/**
 * Configure Jest as the test runner for @testing-library
 *
 * @see https://jestjs.io/docs/en/configuration
 */
module.exports = {
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    'babel-polyfill'
  ],
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/node_modules/', '/__tests__/'],
  testMatch: ['**/__tests__/**/*.(spec|test).[jt]s?(x)']
};
