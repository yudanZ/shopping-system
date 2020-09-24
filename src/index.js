import React from 'react';
import ReactDOM from 'react-dom';

import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/** Makes the Redux store available to the rest of app */
import { Provider } from 'react-redux';

// Create a Redux store holding the state of app.
// Its API is { subscribe, dispatch, getState }.
import {store, persistor} from './redux/store';

ReactDOM.render(
  <Provider store = { store }>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <App />
        
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
