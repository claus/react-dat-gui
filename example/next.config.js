/**
 * Configure Next.js
 *
 * @see https://nextjs.org/docs/#custom-configuration
 */
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  assetPrefix: process.env.NODE_ENV === 'production' ? '/react-dat-gui' : ''
});
