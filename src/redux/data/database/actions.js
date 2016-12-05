import {createAction} from 'redux-actions';

import {
  SET_SYNC_STATE,
  SET_LOGIN_STATE,
  SET_USER
} from '../../actionsTypes';

export const setSyncState = createAction(SET_SYNC_STATE);
export const setLoginState = createAction(SET_LOGIN_STATE);
export const setUser = createAction(SET_USER);