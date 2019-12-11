import React from 'react';

const HeaderContext = React.createContext({
  ref: null,
  updateHeaderRef: () => {},
});

export default HeaderContext;
