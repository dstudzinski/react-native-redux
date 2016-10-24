import React from 'react'
import { Provider } from 'react-redux';

import App from './App'
import createStore from './redux/store';

const store = createStore();

const Main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
};

export default Main;
