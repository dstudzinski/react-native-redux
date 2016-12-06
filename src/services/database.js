import PouchDB from 'pouchdb-react-native';
import PouchDBAuthentication from 'pouchdb-authentication';

PouchDB.plugin(PouchDBAuthentication);

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

const remoteDBUrl = 'http://192.168.0.14:5050'; //TODO: move to config

export function getLocalDatabase() {
  // new PouchDB('procedures').destroy();
  localDB = new PouchDB('procedures');
  return localDB;
}

export function getRemoteDatabase(cookie) {
  const databaseUrl = remoteDBUrl + '/procedures'; //TODO: database name should be dynamic
  const options = {
    skipSetup: true,
    ajax: {
      headers: {
        cookie
      }
    }
  };
  remoteDB = new PouchDB(databaseUrl, options);
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
    return fetch(remoteDBUrl + '/_session', {
      method : 'POST',
      headers : {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + window.btoa(name + ':' + password)
      },
      body : JSON.stringify({name, password})
    }).then(response => {
      const token = response.headers.map['x-couchdb-cookie'][0];
      dispatch(setUser({name, token}));
      dispatch(setLoginState(USER_LOGGED_IN));
      return response;
    }).catch(err => {
      dispatch(setLoginState(USER_LOGGING_FAILED));
      return err;
    });
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
    const userToken = getState().database.user.token;
    const localDB = getLocalDatabase();
    const remoteDB = getRemoteDatabase(userToken);

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