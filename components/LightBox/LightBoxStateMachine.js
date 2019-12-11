import { Machine } from 'xstate';


const openedLightBoxStates = {
  initial: 'desktop',
  states: {
    desktop: {
      on: {
        SHOW_MOBILE: 'mobile',
      },
    },
    mobile: {
      on: {
        SHOW_DESKTOP: 'desktop',
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
        OPEN: 'open',
      },
    },
    open: {
      on: {
        CLOSE: 'closed',
      },
      ...openedLightBoxStates,
    },
  },
});

export default lightBoxMachine;
