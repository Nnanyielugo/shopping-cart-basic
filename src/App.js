import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import './bootstrap-3.3.7-dist/css/bootstrap.min.css';
import './font-awesome-4.7.0/css/font-awesome.min.css'
import './App.css';

import Layout from './containers/hoc/Layout';
import Products from './containers/Products/Products';
import Cart from './containers/Cart/Cart';
import Checkout from './containers/Checkout/Checkout';
import Product from './containers/Product/Product';

class App extends Component {
  render() {
    return (
      <Layout>
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/products/:id" component={Product} />
        <Route path="/" exact component={Products} />
      </Layout>
    );
  }
}

export default App;
