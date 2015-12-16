/**
 * Created by deepaksisodiya on 16/12/15.
 */


import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import rootReducer from './../redux/index';

// create a store that has redux-thunk middleware enabled
const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

export const store = createStoreWithMiddleware(rootReducer);
