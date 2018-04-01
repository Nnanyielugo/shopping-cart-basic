import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

import grocery from '../../assets/images/carousel/grocery-store.jpg';
import shopping from '../../assets/images/carousel/shopping-26.jpg'
import market from '../../assets/images/carousel/market-3.jpg'

const list = [grocery, shopping, market]

class Exp extends Component {
  render() {
    const carousel = list.map((item, index) => {
      return (<Carousel.Item >
                <img style={{height: 500, maxHeight: 500, width: '100%'}} src={item} />
              </Carousel.Item>)
    })
    return(
      <Carousel >
       {carousel}
      </Carousel>
    )
  }
}



export default Exp;