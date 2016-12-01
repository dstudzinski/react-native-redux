import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'remote-redux-devtools';
import PouchMiddleware from 'pouch-redux-middleware';
import {persistStore, autoRehydrate} from 'redux-persist';
import {AsyncStorage} from 'react-native'

import rootReducer from './rootReducer';
import {addProcedure, removeProcedure, updateProcedure} from './data/procedures/actions';
import {getLocalDatabase} from '../services/database';

export default function configureStore(initialState) {
  const localDB = getLocalDatabase();

  // It's not good to sync whole database with state. For quick prototyping it's ok but when list grows only part of
  // items should be loaded to state
  const pouchMiddleware = PouchMiddleware({
    path: '/procedures/data',
    db: localDB,
    actions: {
      remove: doc => {
        return removeProcedure(doc._id)
      },
      insert: doc => {
        return addProcedure(doc)
      },
      update: doc => {
        return updateProcedure(doc)
      },
    }
  });

  const composeEnhancers = composeWithDevTools({ realtime: true});
  const store = createStore(rootReducer, initialState, composeEnhancers(
    autoRehydrate(),
    applyMiddleware(thunk, pouchMiddleware)
  ));

  persistStore(store,{storage: AsyncStorage, whitelist: ['database']});

  return store;
}
