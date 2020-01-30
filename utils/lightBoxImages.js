import { assign } from 'xstate';

const setImageSrc = assign({
  lightBoxImgs: (_context, event) => {
    const { data } = event;
    const { desktop, mobile } = data;
    return ({
      desktop: desktop.src,
      mobile: mobile.src,
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
