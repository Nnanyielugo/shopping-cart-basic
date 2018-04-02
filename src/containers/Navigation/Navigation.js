import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Navigation/Navigation';
import * as actions from '../../store/actions/index';

class Navigation extends Component {
  handleSearch = (event) => {
    this.props.onHandleSearch(event.target.value)
    console.log(event.target.value)
  }
  render() {
    return (
      <Nav cart={this.props.cart}
          search={this.handleSearch} />
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onHandleSearch: (value) => dispatch(actions.handleSearch(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);