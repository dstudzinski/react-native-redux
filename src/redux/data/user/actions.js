import {createAction} from 'redux-actions';

import {
  CLEAR_USER_LOGIN_DATA,
  SET_LOGIN_STATE,
  SET_USER_LOGIN_DATA
} from '../../actionsTypes';

export const clearUserLoginData = createAction(CLEAR_USER_LOGIN_DATA);
export const setLoginState = createAction(SET_LOGIN_STATE);
export const setUserLoginData = createAction(SET_USER_LOGIN_DATA);
