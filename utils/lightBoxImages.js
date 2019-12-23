import { assign } from 'xstate';

const setImageSrc = assign({
  lightBoxImgs: (context, event) => {
    const { data: { desktopSrc, mobileSrc } } = event;
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
