import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './App';

import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import allReducers from './redux/reducers/store';

const store = createStore(allReducers);



ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
  <App />
  </Provider>
  </React.StrictMode>, document.getElementById('root')
)

serviceWorker.unregister();
