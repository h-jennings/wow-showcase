import { Machine, assign } from 'xstate';

const openedLightBoxStates = {
  initial: 'desktop',
  states: {
    desktop: {
      on: {
        TOGGLE: 'mobile',
      },
    },
    mobile: {
      on: {
        TOGGLE: 'desktop',
      },
    },
  },
};

const lightBoxMachine = new Machine({
  id: 'lightBox',
  initial: 'closed',
  context: {
    lightBoxImgs: {
      desktop: null,
      mobile: null,
    },
  },
  states: {
    closed: {
      on: {
        OPEN: {
          target: 'open',
          actions: ['lockScroll', 'setImageSrc'],
        },
      },
    },
    open: {
      on: {
        CLOSE: {
          target: 'closed',
          actions: ['unlockScroll', 'resetImageSrc'],
        },
      },
      ...openedLightBoxStates,
    },
  },
});

export default lightBoxMachine;
