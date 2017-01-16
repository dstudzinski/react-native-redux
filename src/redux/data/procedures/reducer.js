import {remove, findIndex} from 'lodash';

import {
  ADD_PROCEDURE,
  REMOVE_PROCEDURE,
  UPDATE_PROCEDURE
} from '../../actionsTypes';

const defaultState = {
  data: []
};

import {handleActions} from 'redux-actions';

const proceduresReducer = handleActions({
  [ADD_PROCEDURE]: (state, action) => {
    const data = [...state.data];

    data.push(action.payload);

    return {...state, data};
  },

  [REMOVE_PROCEDURE]: (state, action) => {
    const id = action.payload;
    const procedures = [...state.data];

    remove(procedures, procedure => procedure._id === id);

    return {...state, data: procedures};
  },

  [UPDATE_PROCEDURE]: (state, action) => {
    const doc = action.payload;
    const data = [...state.data];

    const procedureIndex = findIndex(state.data, ['_id', doc._id]);

    if (procedureIndex > -1) {
      data[procedureIndex] = doc;
    }

    return {...state, data};
  }

}, defaultState);

export default proceduresReducer;
