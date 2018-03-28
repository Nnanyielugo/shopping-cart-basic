import * as types from '../actions/ActionTypes';
import Products from '../../assets/api/ProductsList';

const initialState = {
  products: null
}

const reducer = (state=initialState, action) => {
  switch(action.type){
    case types.LOAD_PRODUCTS:
      return {
        ...state,
        products: Products
      }
    default:
      return state
  }
}

export default reducer;