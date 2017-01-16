import PouchDB from 'pouchdb-react-native';
PouchDB.debug.enable('pouchdb:http');
PouchDB.debug.enable('pouchdb:api');

import {
  setSyncState
} from '../redux/data/databaseSync/actions';
import {
  clearUserLoginData,
  setLoginState,
  setUserLoginData
} from '../redux/data/user/actions';
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

export function getRemoteDatabase(username, password, databaseName, server) {
  if (remoteDB) {
    return remoteDB;
  }

  const databaseUrl = server + '/' + databaseName;
  const options = {
    skipSetup: true,
    auth: {
      username,
      password
    }
  };

  remoteDB = new PouchDB(databaseUrl, options);
  return remoteDB;
}

export function setupRemoteDatabaseConnection(username, password, server) {
  return dispatch => {
    dispatch(setLoginState(USER_LOGGING_IN));

    return checkRemoteDBLogin(username, password, server)
      .then(() => {
        dispatch(storeLoginData(username, password, server));
        dispatch(setLoginState(USER_LOGGED_IN));
        dispatch(cancelSync());
        dispatch(setSync());
      })
      .catch(err => {
        dispatch(setLoginState(USER_LOGGING_FAILED));
        console.warn('error', JSON.stringify(err));
      })
  }
}

export function checkRemoteDBLogin(username, password, server) {
  const sessionUrl = server + '/_session';

  return fetch(sessionUrl, {
    headers: {
      'Authorization': 'Basic ' + window.btoa(username + ':' + password),
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
    .then(response => {
      const status = response.status;
      const data = JSON.parse(response._bodyText); // response from CouchDB. json() doesn't work

      if (status >= 200 && status < 300 && data.ok) {
        return Promise.resolve(data);
      }

      return Promise.reject(data);
    });
}

export function storeLoginData(username, password, server) {
  return dispatch => {
    dispatch(setUserLoginData({username, password, server}));
  }
}

export function clearLoginData() {
  return dispatch => {
    dispatch(clearUserLoginData());
  }
}

export function cancelRemoteDatabaseConnection() {
  return dispatch => {
    dispatch(setLoginState(USER_LOGGING_OUT));
    dispatch(cancelSync());
    dispatch(clearLoginData());
    remoteDB = undefined;
    dispatch(setLoginState(USER_LOGGED_OUT));
  }
}

export function setSync() {
  return (dispatch, getState) => {
    if(databaseSync) {
      return;
    }

    const {username, password, server} = getState().user;
    const localDB = getLocalDatabase();
    const remoteDB = getRemoteDatabase(username, password, username, server);

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
      databaseSync = undefined;
      dispatch(setSyncState(SYNC_INACTIVE));
    }
  }
}