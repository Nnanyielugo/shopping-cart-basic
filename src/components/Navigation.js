import React from 'react';

const navigation = props => {
  return (
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Shopify</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
          {/* <li class="active"><a href="#">Home</a></li>
          <li><a href="#about">About</a></li> */}
          <li ><a href="#contact">Cart</a></li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default navigation;