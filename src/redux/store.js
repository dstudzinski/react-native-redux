import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'remote-redux-devtools';
import PouchMiddleware from 'pouch-redux-middleware';
import {persistStore, getStoredState} from 'redux-persist';
import {AsyncStorage} from 'react-native'

import rootReducer from './rootReducer';
import {addProcedure, removeProcedure, updateProcedure} from './data/procedures/actions';
import {getLocalDatabase} from '../services/database';

export default async function configureStore() {
  const localDB = getLocalDatabase();

  // It's not good to sync whole database with state. For quick prototyping it's ok but when list grows only part of
  // items should be loaded to state
  const pouchMiddleware = PouchMiddleware({
    path: '/procedures/data',
    db: localDB,
    actions: {
      remove: doc => {
        // console.warn('remove', JSON.stringify(doc));
        return removeProcedure(doc._id)
      },
      insert: doc => {
        // console.warn('insert', JSON.stringify(doc));
        return addProcedure(doc)
      },
      update: doc => {
        // console.warn('update', JSON.stringify(doc));
        return updateProcedure(doc)
      },
    }
  });

  // let initialState = await getStoredState({storage: AsyncStorage});
  let initialState = {};
  const composeEnhancers = composeWithDevTools({ realtime: true});
  const store = createStore(rootReducer, initialState, composeEnhancers(
    // autoRehydrate(),
    applyMiddleware(thunk, pouchMiddleware)
  ));

  persistStore(store,{storage: AsyncStorage, whitelist: ['user']});

  return store;
}
