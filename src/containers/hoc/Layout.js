import React from 'react';

import Aux from './Aux';
import Navigation from '../Navigation/Navigation';

const Layout = props => (
  <Aux>
    <Navigation />
    <main>
      {props.children}
    </main>
  </Aux>
);

export default Layout;