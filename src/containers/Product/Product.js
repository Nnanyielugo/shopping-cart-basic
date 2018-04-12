import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Product.css';
import { formatCurrency } from '../../helpers/currencyHelper';
import * as actions from '../../store/actions/index';

class Product extends Component {
  componentDidMount(){
    this.props.onLoadProducts();
  }

  checkProduct = (productId) => {
    let cart = this.props.cart;
    return cart.some(item => item.id === productId);
  }

  addToCart = (id, name, price) => {
    let cartItem = this.props.cart;
    let quantity = 1
    if(this.checkProduct(id)) {
      console.log('id matches')
      this.props.onIncreaseQuantity(id)
    } else {
      const product = {};
      product.id = id;
      product.name = name;
      product.price = price;
      product.quantity = quantity;
      console.log(product)

      this.props.onAddToCart(product)
    }
    
  }

  render(){
    return (
      <div className='Single'>
        <div>
          <h2>{this.props.product.Name}</h2>
          <div><span className="badge currenc">{formatCurrency(this.props.product.Price)}</span></div>
          <img style={{height: '100%', width: 'auto'}} src={this.props.product.Image} />
          <p>{this.props.product.Description}</p>
          <button className="button" onClick={(id, name, price) => this.addToCart(this.props.product.id, this.props.product.Name, this.props.product.Price)} >Add to cart</button>

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const productId = ownProps.match.params.id;
  const product = state.products.products ? Object.assign({}, state.products.products.find(product => product.id == productId)) : '';

  return {
    product: product,
    products: state.products.products,
    cart: state.cart.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoadProducts: () => dispatch(actions.loadProducts()),
    onAddToCart: (product) => dispatch(actions.addToCart(product)),
    onIncreaseQuantity: (id) => dispatch(actions.increaseQuantity(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)