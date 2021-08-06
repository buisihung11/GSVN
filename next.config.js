// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  ...withPWA({
    pwa: {
      dest: 'public',
      disable: !isProduction
    }
  }),
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  }
};
