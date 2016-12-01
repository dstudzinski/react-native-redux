import PouchDB from 'pouchdb-react-native';
// import PouchDBAuthentication from 'pouchdb-authentication';
// PouchDB.plugin(PouchDBAuthentication);
PouchDB.plugin(require('pouchdb-authentication'));

import {
  setSyncState,
  setLoginState,
  setUser
} from '../redux/data/database/actions';
import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  USER_LOGGING_IN,
  USER_LOGGING_OUT,
  USER_LOGGING_FAILED,

  SYNC_CHANGE,
  SYNC_PAUSED,
  SYNC_ACTIVE,
  SYNC_DENIED,
  SYNC_COMPLETE,
  SYNC_ERROR,
  SYNC_INACTIVE
} from '../configs/constants';

let localDB;
let remoteDB;
let databaseSync;

export function getLocalDatabase() {
  if (localDB) {
    return localDB;
  }

  // new PouchDB('procedures').destroy();
  localDB = new PouchDB('procedures');
  return localDB;
}

export function getRemoteDatabase() {
  if (remoteDB) {
    return remoteDB;
  }

  const remoteDBUrl = 'http://192.168.0.14:5984/procedures'; //TODO: move to config, database name should be dynamic
  remoteDB = new PouchDB(remoteDBUrl, {skipSetup: true});
  return remoteDB;
}

export function setupRemoteDatabaseConnection(name, password) {
  return dispatch => {
    return dispatch(loginToDatabase(name, password))
      .then(function() {
        dispatch(setSync());
      });
  }
}

export function loginToDatabase(name, password) {
  return dispatch => {
    const ajaxOpts = {
      ajax: {
        headers: {
          Authorization: 'Basic ' + window.btoa(name + ':' + password)
        }
      }
    };

    const remoteDB = getRemoteDatabase();

    return new Promise((resolve, reject) => {
      dispatch(setLoginState(USER_LOGGING_IN));
      remoteDB.login(name, password, ajaxOpts, (err, response) => {
        if (err) {
          dispatch(setLoginState(USER_LOGGING_FAILED));
          reject(err);
        } else {
          dispatch(setUser({name, password}));
          dispatch(setLoginState(USER_LOGGED_IN));
          resolve(response);
        }
      });
    });
  }
}

export function logoutFromDatabase() {
  return dispatch => {
    const remoteDB = getRemoteDatabase();

    return new Promise((resolve, reject) => {
      dispatch(setLoginState(USER_LOGGING_OUT));
      remoteDB.logout((err, response) => {
        // if (err) {
        //   reject(err);
        // } else {
        resolve(response);
        dispatch(setLoginState(USER_LOGGED_OUT));
        // }
      });
    });
  }
}

export function setSync() {
  return dispatch => {
    const localDB = getLocalDatabase();
    const remoteDB = getRemoteDatabase();

    dispatch(cancelSync());

    databaseSync = localDB.sync(remoteDB, {
      live: true,
      retry: true
    });

    databaseSync.on('change', function (info) {
      // handle change
      dispatch(setSyncState(SYNC_CHANGE));
    }).on('paused', function (err) {
      // replication paused (e.g. replication up to date, user went offline)
      dispatch(setSyncState(SYNC_PAUSED));
    }).on('active', function () {
      // replicate resumed (e.g. new changes replicating, user went back online)
      dispatch(setSyncState(SYNC_ACTIVE));
    }).on('denied', function (err) {
      // a document failed to replicate (e.g. due to permissions)
      dispatch(setSyncState(SYNC_DENIED));
    }).on('complete', function (info) {
      // handle complete
      dispatch(setSyncState(SYNC_COMPLETE));
    }).on('error', function (err) {
      // handle error
      dispatch(setSyncState(SYNC_ERROR));
    });
  }
}

export function cancelSync() {
  return dispatch => {
    if (databaseSync) {
      databaseSync.cancel();
      dispatch(setSyncState(SYNC_INACTIVE));
    }
  }
}