import {
  CLEAR_USER,
  SET_LOGIN_STATE,
  SET_USER
} from '../../actionsTypes';
import {
  USER_LOGGED_OUT
} from '../../../configs/constants';

const defaultState = {
  loginState: USER_LOGGED_OUT,
  user: {}
};

import {handleActions} from 'redux-actions';

const navigationStateReducer = handleActions({
  [CLEAR_USER]: (state, action) => {
    return Object.assign({}, state, {user: {}});
  },

  [SET_LOGIN_STATE]: (state, action) => {
    return Object.assign({}, state, {loginState: action.payload});
  },

  [SET_USER]: (state, action) => {
    return Object.assign({}, state, {user: {...state.user, ...action.payload}});
  }
}, defaultState);

export default navigationStateReducer;
