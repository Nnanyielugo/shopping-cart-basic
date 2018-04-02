import * as types from '../actions/ActionTypes';
import Products from '../../assets/api/ProductsList';

const initialState = {
  products: null,
  term: ''
}

const reducer = (state=initialState, action) => {
  switch(action.type){
    case types.LOAD_PRODUCTS:
      return {
        ...state,
        products: Products
      }
    case types.HANDLE_SEARCH:
      return {
        ...state,
        term: action.term
      }
    default:
      return state
  }
}

export default reducer;