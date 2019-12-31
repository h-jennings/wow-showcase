import React from 'react';

const ElementVisibilityContext = React.createContext({
  visibilityState: 'visible',
  changeVisibilityState: () => {},
});

export default ElementVisibilityContext;
