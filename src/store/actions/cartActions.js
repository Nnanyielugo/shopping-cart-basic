import * as types from './ActionTypes';

export const addToCart = (product) => {
  return {
    type: types.ADD_TO_CART,
    product
  }
}