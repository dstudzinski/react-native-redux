import {createAction} from 'redux-actions';

import {
  PUSH_STATE,
  POP_STATE,
  SIDEBAR_STATE
} from '../../actionsTypes';

export const pushState = createAction(PUSH_STATE);
export const popState = createAction(POP_STATE);
export const sidebarState = createAction(SIDEBAR_STATE);
