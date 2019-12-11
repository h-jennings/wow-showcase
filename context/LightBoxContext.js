import { createContext } from 'react';

const LightBoxContext = createContext({
  current: null,
  send: null,
});

export default LightBoxContext;
