import PouchDB from 'pouchdb-react-native';
import PouchDBAuthentication from 'pouchdb-authentication';

PouchDB.plugin(PouchDBAuthentication);
// PouchDB.debug.enable('*');

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

const remoteDBUrl = 'http://192.168.0.14:5984'; //TODO: move to config

export function getLocalDatabase() {
  if(localDB) {
    return localDB;
  }

  // new PouchDB('procedures').destroy();
  localDB = new PouchDB('procedures');
  return localDB;
}

export function getRemoteDatabase(username, password, databaseName) {
  const databaseUrl = remoteDBUrl + '/' + databaseName;
  const options = {
    skipSetup: true,
    auth: {
      username,
      password
    }
  };
  remoteDB = new PouchDB(databaseUrl, options);

  console.warn('remote');
  remoteDB.info().then(suc => {
    console.warn(JSON.stringify(suc));
  })
    .catch(err => {
      console.warn(JSON.stringify(err));
    })

  return remoteDB;
}

export function setupRemoteDatabaseConnection(username, password) {
  return dispatch => {
    console.warn('setup');
    return dispatch(loginToDatabase(username, password))
      .then(function() {
        dispatch(setSync());
      });
  }
}

export function loginToDatabase(username, password) {
  return dispatch => {
    console.warn('login');
    return new Promise((res, rej) => {
      dispatch(setUser({username, password}));
      dispatch(setLoginState(USER_LOGGED_IN));
      res();
    })
  }
}

export function logoutFromDatabase() {
  return dispatch => {
    const remoteDB = getRemoteDatabase();
    // TODO: use fetch and remove pouchdb-authentication dependency
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
  return (dispatch, getState) => {
    console.warn('sync');
    const {username, password} = getState().database.user;
    const localDB = getLocalDatabase();
    const remoteDB = getRemoteDatabase(username, password, username);

    dispatch(cancelSync());

    databaseSync = localDB.sync(remoteDB, {
      live: true,
      retry: true
    });

    databaseSync.on('change', function (info) {
      // handle change
      console.log('change', info);
      dispatch(setSyncState(SYNC_CHANGE));
    }).on('paused', function (err) {
      // replication paused (e.g. replication up to date, user went offline)
      console.log('pause', err);
      dispatch(setSyncState(SYNC_PAUSED));
    }).on('active', function (info) {
      // replicate resumed (e.g. new changes replicating, user went back online)
      console.log('active', info);
      dispatch(setSyncState(SYNC_ACTIVE));
    }).on('denied', function (err) {
      // a document failed to replicate (e.g. due to permissions)
      console.log('denied', err);
      dispatch(setSyncState(SYNC_DENIED));
    }).on('complete', function (info) {
      // handle complete
      console.log('complete', info);
      dispatch(setSyncState(SYNC_COMPLETE));
    }).on('error', function (err) {
      // handle error
      console.log('error', err);
      console.warn(JSON.stringify(err));
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