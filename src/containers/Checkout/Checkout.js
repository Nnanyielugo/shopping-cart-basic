import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import CheckoutComponent from '../../components/Checkout/Checkout'; 

class Checkout extends Component {
  
  clearCart = (e) => {
    e.preventDefault()
    this.props.onCLearCart();
    this.props.history.push('/')
  }

  render(){
    return (
      <div className="main-container">
        <CheckoutComponent
            cart={this.props.cart}
            total={this.props.total}
            clearCart={this.clearCart} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart.cart,
    total: state.cart.total
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCLearCart: () => dispatch(actions.clearCart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);