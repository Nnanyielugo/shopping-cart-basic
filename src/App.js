import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import './bootstrap-3.3.7-dist/css/bootstrap.min.css'
import './App.css';

import Layout from './containers/hoc/Layout';
import Products from './containers/Products/Products';
import Cart from './containers/Cart/Cart';

class App extends Component {
  render() {
    return (
      <Layout>
         <Route path="/cart" component={Cart} />
        <Route path="/" exact component={Products} />
      </Layout>
    );
  }
}

export default App;
