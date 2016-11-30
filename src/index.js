import React, {Component} from 'react'
import { Provider } from 'react-redux';

import configureI18n from './i18n';
import App from './components/App'
import createStore from './redux/store';

configureI18n();
const store = createStore();

class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default Main;