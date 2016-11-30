import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'remote-redux-devtools';
import PouchMiddleware from 'pouch-redux-middleware';

import rootReducer from './rootReducer';
import {addProcedure, removeProcedure, updateProcedure} from './data/procedures/actions';
import {getLocalDatabase} from '../services/database';

export default function configureStore(initialState) {
  const localDB = getLocalDatabase();

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
    applyMiddleware(thunk, pouchMiddleware)
  ));

  return store;
}
