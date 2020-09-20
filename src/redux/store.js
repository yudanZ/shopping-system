import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middlewares = [logger];

// Create a Redux store holding the state of app.
// Its API is { subscribe, dispatch, getState }.
const store = createStore( rootReducer , applyMiddleware(...middlewares));

export default store;