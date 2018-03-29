import * as types from './ActionTypes';

export const addToCart = (product) => {
  return {
    type: types.ADD_TO_CART,
    product
  }
}

export const increaseQuantity = id => {
  return {
    type: types.INCREASE_QUANTITY,
    id
  }
}

export const decreaseQuantity = id => {
  return {
    type: types.DECREASE_QUANTITY,
    id
  }
}

export const removeItem = id => {
  return {
    type:types.REMOVE_ITEM,
    id
  }
}

export const clearCart = () => {
  return {
    type: types.CLEAR_CART
  }
}