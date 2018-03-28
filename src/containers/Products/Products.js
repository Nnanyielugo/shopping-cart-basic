import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import ProductList from '../../components/Products/Products';

class Products extends Component {
  componentDidMount() {
    this.props.onLoadProducts()
  }

  addToCart = (id, name, price) => {
    const product = {};
    product.id = id;
    product.name = name;
    product.price = price;
    console.log(product)

    this.props.onAddToCart(product)
  }
  
  render() {
    let products  = null;
    if(this.props.products) {
      products = this.props.products.map(product => {
        return <ProductList 
                    key={product.id} 
                    product={product}
                    addToCart={this.addToCart} />
      })
    }
    return (
      <div className="row main-container">{products}</div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoadProducts: () => dispatch(actions.loadProducts()),
    onAddToCart: (product) => dispatch(actions.addToCart(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);