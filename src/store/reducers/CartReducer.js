import * as types from '../actions/ActionTypes';

function updatePrices(products){
  let prices = [], total = 0;

  for(let product in products){
    prices.push(products[product].price);
    total = prices.reduce((a, b) => a+b)
  }
  return total;
}

const initialState = {
  cart: [],
  total: 0
}



const reducer = (state=initialState, action) => {
  switch(action.type) {
    case types.ADD_TO_CART:
      return {
        ...state,
        cart: state.cart.concat(action.product),
        total: updatePrices(state.cart.concat(action.product))
      }
    default:
      return state;
  }
}

export default reducer;