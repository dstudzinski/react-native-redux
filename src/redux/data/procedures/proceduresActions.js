import uuid from 'react-native-uuid';

import {
  ADD_PROCEDURE
} from '../../actionsTypes';

import {createAction} from 'redux-actions';

export const addProcedure = createAction(ADD_PROCEDURE, payload => {
  payload._id = uuid.v4();
  return payload;
});
