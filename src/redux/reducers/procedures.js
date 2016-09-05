import {
  ADD_PROCEDURE
} from '../actionsTypes';

const defaultState = {
  data: []
};

import {handleActions} from 'redux-actions';

const proceduresReducer = handleActions({
  [ADD_PROCEDURE]: (state, action) => {
    const data = [...state.data];
    data.push(action.payload);

    return {...state, data};
  }

}, defaultState);

export default proceduresReducer;
