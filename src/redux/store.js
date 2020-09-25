import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';

const middlewares = [];

//setting only on development showing our state
if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}

// Create a Redux store holding the state of app.
// Its API is { subscribe, dispatch, getState }.
export const store = createStore( rootReducer , applyMiddleware(...middlewares));

export const persistor = persistStore(store);
export default {store, persistor };