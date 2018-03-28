import React from 'react';

import './Products.css'

const products = props => {
  return (
      <div className="col-xs-12 col-sm-4 col-lg-4">
        <div className="Products">
          <h2>{props.product.Name}</h2>
          <img src={props.product.Image} />
          <div>
            <span>{props.product.Description}</span>
            <span className="badge">{props.product.Price}</span>
          </div>
          <button onClick={(id, name, price) => props.addToCart(props.product.id, props.product.Name, props.product.Price)} >Add to cart</button>
        </div>
      </div>
  )
}

export default products;