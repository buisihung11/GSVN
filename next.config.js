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
  future: {
    webpack5: true
  },
  webpack: function (config, options) {
    config.experiments = {};
    return config;
  }
};
