import * as types from './ActionTypes';


export const loadProducts = () => {
  return {
    type: types.LOAD_PRODUCTS
  }
}

export const handleSearch = term => {
  return {
    type: types.HANDLE_SEARCH,
    term
  }
}