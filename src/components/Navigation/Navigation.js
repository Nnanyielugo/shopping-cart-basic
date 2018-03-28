import React from 'react';
import { Link } from 'react-router-dom';

const navigation = props => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to="/" className="navbar-brand">Shopify</Link>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
          {/* <li className="active"><a href="#">Home</a></li>
          <li><a href="#about">About</a></li> */}
          <li ><Link to="/cart">Cart</Link></li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default navigation;