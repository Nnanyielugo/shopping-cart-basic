import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from '../../components/Cart/Cart'

class Cart extends Component {
  render() {
    let cart = ''
    let noCart  = <h4 style={{color: "red"}}>You have no items in your cart!</h4>
    if(this.props.cart != '') {
      noCart = ''
    }
    if(this.props.cart){
       cart = this.props.cart.map(cartItem => {
        console.log("Cart Item: ", cartItem)
        return (<tbody key={cartItem.id}>
                  <tr>
                    <td><input style={{width: "28px"}} /></td>
                    <td>{cartItem.name}</td>
                    <td>{cartItem.price}</td>
                    <td><a href="#" class="btn btn-mini btn-danger" data-bind="click:$parent.removeFromCart">
                              <i class="icon-remove icon-white"></i>Remove </a></td>
                  </tr>
                </tbody>)
      })
    } 
    return(
      <div className="main-container cart-table">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>
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

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);