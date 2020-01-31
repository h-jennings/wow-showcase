const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([withSass, [optimizedImages, {
  imagesName: '[name]-[hash].[ext]',
  handleImages: ['jpeg', 'png', 'svg'],
  optimizeImages: true,
  optimizeImagesInDev: false,
  mozjpeg: {
    quality: 80,
  },
  optipng: {
    optimizationLevel: 3,
  },
}]]);
