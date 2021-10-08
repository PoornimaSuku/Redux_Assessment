import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';
import Thunk from 'redux-thunk';

export const middlewares = [Thunk];

let Store = createStore(rootReducer,{},compose(
    applyMiddleware(...middlewares)
  ))



export default Store;