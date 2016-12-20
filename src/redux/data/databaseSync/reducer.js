import {
  SET_SYNC_STATE
} from '../../actionsTypes';
import {
  SYNC_INACTIVE
} from '../../../configs/constants';

const defaultState = {
  syncState: SYNC_INACTIVE
};

import {handleActions} from 'redux-actions';

const navigationStateReducer = handleActions({
  [SET_SYNC_STATE]: (state, action) => {
    return Object.assign({}, state, {syncState: action.payload});
  }
}, defaultState);

export default navigationStateReducer;
