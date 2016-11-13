import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';
import PouchDB from 'pouchdb-react-native';
import PouchMiddleware from 'pouch-redux-middleware';

import rootReducer from './rootReducer';
import {addProcedure, removeProcedure, updateProcedure} from './data/procedures/actions';

export default function configureStore(initialState) {
  const remoteDBUrl = 'http://192.168.0.14:5984/procedures';

  // new PouchDB('procedures').destroy();
  const localDB = new PouchDB('procedures');
  const remoteDB = new PouchDB(remoteDBUrl);

  localDB.sync(remoteDB, {
    live: true,
    retry: true
  });

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

  const enhancer = compose(
    applyMiddleware(thunk, pouchMiddleware),
    devTools({realtime: true})
  );

  const store = createStore(rootReducer, initialState, enhancer);
  devTools.updateStore(store);

  return store;
}
