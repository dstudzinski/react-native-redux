import React, {Component} from 'react'
import { Provider } from 'react-redux';

import configureI18n from './i18n';
import App from './components/App'
import createStore from './redux/store';

configureI18n();
const createStoreAsync = createStore();

class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
      store: undefined
    };

    // get stored state then render app
    createStoreAsync.then(store => {
      this.setState({store});
    })
  }

  render() {
    if(this.state.store) {
      return (
        <Provider store={this.state.store}>
          <App />
        </Provider>
      )
    }

    return null;
  }
}

export default Main;