import { assign } from 'xstate';

const setImageSrc = assign({
  lightBoxImgs: (_context, event) => {
    const { data } = event;
    const { desktopSrc, mobileSrc } = data;
    return ({
      desktop: desktopSrc,
      mobile: mobileSrc,
    });
  },
});

const resetImageSrc = assign({
  lightBoxImgs: () => ({
    desktop: null,
    mobile: null,
  }),
});


export {
  setImageSrc,
  resetImageSrc,
};
