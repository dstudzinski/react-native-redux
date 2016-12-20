import {
  CLEAR_USER_LOGIN_DATA,
  SET_LOGIN_STATE,
  SET_USER_LOGIN_DATA
} from '../../actionsTypes';
import {
  USER_LOGGED_OUT
} from '../../../configs/constants';

const defaultState = {
  loginState: USER_LOGGED_OUT,
  username: undefined,
  password: undefined
};

import {handleActions} from 'redux-actions';

const navigationStateReducer = handleActions({
  [CLEAR_USER_LOGIN_DATA]: (state, action) => {
    return Object.assign({}, state, {username: undefined, password: undefined});
  },

  [SET_LOGIN_STATE]: (state, action) => {
    return Object.assign({}, state, {loginState: action.payload});
  },

  [SET_USER_LOGIN_DATA]: (state, action) => {
    const {username, password} = action.payload;
    return Object.assign({}, state, {username, password});
  }
}, defaultState);

export default navigationStateReducer;
