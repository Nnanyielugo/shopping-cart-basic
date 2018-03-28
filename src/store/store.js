import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import productsReducer from './reducers/ProductsReducer';
import cartReducer from './reducers/CartReducer';


const configureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
  })

  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

  return store;
}

export default configureStore;