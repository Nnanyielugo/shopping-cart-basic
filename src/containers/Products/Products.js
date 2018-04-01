import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import ProductList from '../../components/Products/Products';
import Carousel from '../../components/Carousel/Carousel';

class Products extends Component {
  state = {
    term: '',
  }

  componentDidMount() {
    this.props.onLoadProducts();
  }

  checkProduct = (productId) => {
    let cart = this.props.cart;
    return cart.some(item => item.id === productId);
  }

  handleSearch = (event) => {
    this.setState({
      term: event.target.value
    })
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
  
  render() {
    let products  = null;
    let term = this.state.term;
    let x;
    function searchingFor(term){
      return function(x){
        return x.Name.toLowerCase().includes(term.toLowerCase()) || !term;
      }
    }
    if(this.props.products) {
      products = this.props.products.filter(searchingFor(term)).map(product => {
        return <ProductList 
                    key={product.id} 
                    product={product}
                    addToCart={this.addToCart} />
      })
    }
    return (
      <div className="row main-container">
      <input onChange={this.handleSearch} />
        <div className="carousel-container">
          <Carousel />
        </div>
        {products}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(Products);