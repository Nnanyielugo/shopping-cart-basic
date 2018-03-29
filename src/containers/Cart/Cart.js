import React, { Component } from 'react';
import { connect } from 'react-redux';

import CartItem from '../../components/Cart/Cart'
import * as actions from '../../store/actions/index';

class Cart extends Component {
  decreaseQuantity = (id, quantity) => {
    if(quantity <= 0){
      return
    } 
    this.props.onDecreaseQuantity(id);
  }

  render() {
    let cart = ''
    let noCart  = <h4 style={{color: "red"}}>You have no items in your cart!</h4>
    if(this.props.cart.length) {
      noCart = ''
    }
    if(this.props.cart){
       cart = this.props.cart.map(cartItem => {
        console.log("Cart Item: ", cartItem)
        return (<tbody key={cartItem.id}>
                  <tr>
                    <td><input readOnly value={cartItem.quantity} style={{width: "28px", textAlign: 'center'}} /><span onClick={(id, quantity) => this.decreaseQuantity(cartItem.id, cartItem.quantity)} className="glyphicon glyphicon-minus minus"></span><span onClick={(id) => this.props.onIncreaseQuantity(cartItem.id)} className="glyphicon glyphicon-plus plus"></span></td>
                    <td>{cartItem.name}</td>
                    <td>{cartItem.price}</td>
                    <td><a onClick={(id) => this.props.onRemoveItem(cartItem.id)} href="#" className="btn btn-mini btn-danger">
                              <i className="icon-remove icon-white"></i>Remove </a></td>
                  </tr>
                </tbody>)
      })
    } 
    return(
      <div className="main-container cart-table">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th style={{width: "95px"}}>
                Qty
              </th>
              <th>
                Product
              </th>
              <th>
                Price
              </th>
              <th style={{width: "75px"}}>
                  Actions <i className="icon-resize-full icon-black pull-right" style={{cursor: "pointer"}}>
                  </i>
              </th>
            </tr>
          </thead>
          {cart}
        
        </table>
        {this.props.total}
       {noCart}
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
    onIncreaseQuantity: (id) => dispatch(actions.increaseQuantity(id)),
    onDecreaseQuantity: (id) => dispatch(actions.decreaseQuantity(id)),
    onRemoveItem: (id) => dispatch(actions.removeItem(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);