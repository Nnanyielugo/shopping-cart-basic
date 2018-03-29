import * as types from '../actions/ActionTypes';
import { updatePrices, increaseQuantity, reduceQuantity, removeItem} from '../helpers/cartHelpers';


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
    case types.INCREASE_QUANTITY:
      return {
        ...state,
        cart: increaseQuantity(state.cart, action.id),
        total: updatePrices(state.cart)
      }
    case types.DECREASE_QUANTITY:
      return {
        ...state,
        cart: reduceQuantity(state.cart, action.id),
        total: updatePrices(state.cart)
      }
    case types.REMOVE_ITEM:
      return {
        ...state,
        cart: removeItem(state.cart, action.id),
        total: updatePrices(state.cart)
      }
    default:
      return state;
  }
}

export default reducer;