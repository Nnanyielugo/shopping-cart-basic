import React from 'react';

import Aux from './Aux';
import Navigation from '../Navigation/Navigation';

const Layout = props => (
  <Aux>
    <Navigation />
    <main className="container">
      {props.children}
    </main>
  </Aux>
);

export default Layout;