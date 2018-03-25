import React, { Component } from 'react';

import './bootstrap-3.3.7-dist/css/bootstrap.min.css'
import './App.css';

import Layout from './containers/hoc/Layout';

class App extends Component {
  render() {
    return (
      <Layout>
        <div>Main page</div>
      </Layout>
    );
  }
}

export default App;
