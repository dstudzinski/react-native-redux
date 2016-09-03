import { createStore, applyMiddleware, compose } from 'redux';
import devTools from 'remote-redux-devtools';

import rootReducer from './rootReducer';

export default function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(),
    devTools({ realtime: true })
  );
  const store = createStore(rootReducer, initialState, enhancer);

  devTools.updateStore(store);

  return store;
}
