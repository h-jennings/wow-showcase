import { Machine } from 'xstate';
// import { lockScroll, unlockScroll } from '../../utils/scroll';


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
  states: {
    closed: {
      on: {
        OPEN: {
          target: 'open',
          actions: 'lockScroll',
        },
      },
    },
    open: {
      on: {
        CLOSE: {
          target: 'closed',
          actions: 'unlockScroll',
        },
      },
      ...openedLightBoxStates,
    },
  },
});

export default lightBoxMachine;
