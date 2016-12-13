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
const ApiUrl = 'http://192.168.0.14:5050'; //TODO: move to config

export function getLocalDatabase() {
  // new PouchDB('procedures').destroy();
  localDB = new PouchDB('procedures');
  return localDB;
}

export function getRemoteDatabase(parameters) {
  const {consumerKey, consumerSecret, token, secret, databaseName} = parameters;
  const databaseUrl = remoteDBUrl + '/' + databaseName; //TODO: database name should be dynamic

  console.log('database url:', databaseUrl);
  // TODO: generate Authorization header with OAuth data
  const options = {
    skipSetup: true,
    ajax: {
      headers: {
        // 'Authorization': 'OAuth oauth_consumer_key="consumerKey1",oauth_token="a9df264e-8445-43fe-bf66-87150caab1ba",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1481653127",oauth_nonce="vnQ9HE",oauth_version="1.0",oauth_signature="OBkuJfREIaPLMN6VXIkLFkkyKRA%3D"'
        'Authorization': 'Basic YmVhdGE6YmVhdGE='
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
    return fetch(ApiUrl + '/login', {
      method : 'POST',
      headers : {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + window.btoa(name + ':' + password)
      }
    }).then(response => response.json())
      .then(data => {
      const token = data.token;
      const secret = data.secret;
      dispatch(setUser({name, password, token, secret}));
      dispatch(setLoginState(USER_LOGGED_IN));
      return data;
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
    const token = getState().database.user.token;
    const secret = getState().database.user.secret;
    const consumerKey = 'consumerKey1'; // TODO: move to config
    const consumerSecret = 'consumerKeySecret1'; // TODO: move to config
    const databaseName = 'procedures'; // TODO: should be dynamic per user
    const localDB = getLocalDatabase();
    const remoteDB = getRemoteDatabase({consumerKey, consumerSecret, token, secret, databaseName});

    dispatch(cancelSync());

    // databaseSync = localDB.sync(remoteDB, {
    //   live: true,
    //   retry: true
    // });
    //
    // console.log('start sync');
    //
    // databaseSync.on('change', function (info) {
    //   // handle change
    //   console.log('change', info);
    //   dispatch(setSyncState(SYNC_CHANGE));
    // }).on('paused', function (err) {
    //   // replication paused (e.g. replication up to date, user went offline)
    //   console.log('pause', err);
    //   dispatch(setSyncState(SYNC_PAUSED));
    // }).on('active', function (info) {
    //   // replicate resumed (e.g. new changes replicating, user went back online)
    //   console.log('active', info);
    //   dispatch(setSyncState(SYNC_ACTIVE));
    // }).on('denied', function (err) {
    //   // a document failed to replicate (e.g. due to permissions)
    //   console.log('denied', err);
    //   dispatch(setSyncState(SYNC_DENIED));
    // }).on('complete', function (info) {
    //   // handle complete
    //   console.log('complete', info);
    //   dispatch(setSyncState(SYNC_COMPLETE));
    // }).on('error', function (err) {
    //   // handle error
    //   console.log('error', err);
    //   console.warn(JSON.stringify(err));
    //   dispatch(setSyncState(SYNC_ERROR));
    // });

    localDB.info().then(function (result) {
      console.log('local db info:', result);
    }).catch(function (err) {
      console.log(err);
    });

    remoteDB.info().then(function (result) {
      console.log('remote db info:', result);
    }).catch(function (err) {
      console.log(err);
    });

    remoteDB.allDocs({
      include_docs: true,
      attachments: true
    }).then(function (result) {
      console.log(result);
    }).catch(function (err) {
      console.log(err);
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