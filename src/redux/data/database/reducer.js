import {
  CLEAR_USER,
  SET_SYNC_STATE,
  SET_LOGIN_STATE,
  SET_USER
} from '../../actionsTypes';
import {
  SYNC_INACTIVE,
  USER_LOGGED_OUT
} from '../../../configs/constants';

const defaultState = {
  syncState: SYNC_INACTIVE,
  loginState: USER_LOGGED_OUT,
  user: {}
};

import {handleActions} from 'redux-actions';

const navigationStateReducer = handleActions({
  [CLEAR_USER]: (state, action) => {
    return Object.assign({}, state, {user: {}});
  },

  [SET_SYNC_STATE]: (state, action) => {
    return Object.assign({}, state, {syncState: action.payload});
  },

  [SET_LOGIN_STATE]: (state, action) => {
    return Object.assign({}, state, {loginState: action.payload});
  },

  [SET_USER]: (state, action) => {
    return Object.assign({}, state, {user: {...state.user, ...action.payload}});
  }
}, defaultState);

export default navigationStateReducer;
