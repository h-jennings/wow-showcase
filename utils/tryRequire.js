/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */

const tryRequire = (path) => {
  try {
    return require(`../images/${path}`);
  } catch (error) {
    return '';
  }
};

export default tryRequire;
