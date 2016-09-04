import {
  ADD_PROCEDURE
} from '../actionsTypes';

const defaultState = {
  data: new Map([])
};

import {handleActions} from 'redux-actions';

const proceduresReducer = handleActions({
  [ADD_PROCEDURE]: (state, action) => {
    const data = [...state.data];
    data.push([action.payload._id, action.payload]);
    const newData = new Map(data);

    return {...state, data: newData};
  }

}, defaultState);

export default proceduresReducer;
