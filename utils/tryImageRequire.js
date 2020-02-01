/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */

const tryImageRequire = (path) => {
  try {
    return require(`../images/${path}`);
  } catch (error) {
    return '/images/broken-image.jpg';
  }
};

export default tryImageRequire;
