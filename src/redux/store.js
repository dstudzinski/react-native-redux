import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';
import {persistStore, autoRehydrate} from 'redux-persist'
import {AsyncStorage} from 'react-native'

import rootReducer from './rootReducer';

export default function configureStore(initialState) {
  const enhancer = compose(
    autoRehydrate(),
    applyMiddleware(thunk),
    devTools({ realtime: true })
  );
  const store = createStore(rootReducer, initialState, enhancer);

  persistStore(store,{storage: AsyncStorage});
  devTools.updateStore(store);

  return store;
}
