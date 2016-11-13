import uuid from 'react-native-uuid';

import {
  ADD_PROCEDURE,
  REMOVE_PROCEDURE,
  UPDATE_PROCEDURE
} from '../../actionsTypes';

import {createAction} from 'redux-actions';

export const addProcedure = createAction(ADD_PROCEDURE, payload => {
  if (!payload._id) {
    payload._id = uuid.v4();
  }

  return payload;
});
export const removeProcedure = createAction(REMOVE_PROCEDURE);
export const updateProcedure = createAction(UPDATE_PROCEDURE);
