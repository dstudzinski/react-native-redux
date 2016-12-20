import {createAction} from 'redux-actions';

import {
  CLEAR_USER,
  SET_LOGIN_STATE,
  SET_USER
} from '../../actionsTypes';

export const clearUser = createAction(CLEAR_USER);
export const setLoginState = createAction(SET_LOGIN_STATE);
export const setUser = createAction(SET_USER);
