/**
 * Configure Next.js
 *
 * @see https://nextjs.org/docs/#custom-configuration
 */
module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/react-dat-gui' : ''
};
