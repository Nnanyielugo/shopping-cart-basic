import React from 'react';
import { Link } from 'react-router-dom';

import './Products.css'
import { formatCurrency } from '../../helpers/currencyHelper';

const products = props => {
  return (
      <div className="col-xs-12 col-sm-4 col-lg-4">
        <Link style={{textDecoration: 'none', color: 'black'}} to={`/products/${props.product.id}`}>
          <div className="Products">
            <h2>{props.product.Name}</h2>
            <span className="badge currency">{formatCurrency(props.product.Price)}</span>
            <img src={props.product.Image} />
            <div className="discription">
              <span>{props.product.Description}</span>
            </div>
            <button className="button" onClick={(id, name, price) => props.addToCart(props.product.id, props.product.Name, props.product.Price)} >Add to cart</button>
          </div>
        </Link>
      </div>
  )
}

export default products;