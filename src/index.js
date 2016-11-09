import React from 'react'
import { Provider } from 'react-redux';

import configureI18n from './i18n';
import App from './App'
import createStore from './redux/store';

const store = createStore();
configureI18n();

const Main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
};

export default Main;
