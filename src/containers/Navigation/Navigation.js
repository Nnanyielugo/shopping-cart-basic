import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Navigation/Navigation';

class Navigation extends Component {
  render() {
    return (
      <Nav cart={this.props.cart} />
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart.cart
  }
}

export default connect(mapStateToProps)(Navigation);