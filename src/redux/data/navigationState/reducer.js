import * as NavigationStateUtils from 'NavigationStateUtils';

import {
  PUSH_STATE,
  POP_STATE,
  SIDEBAR_STATE
} from '../../actionsTypes';
import {defaultRoute} from '../../../configs/routes';

const defaultState = {
  index: 0,
  routes: [
    defaultRoute
  ]
};

import {handleActions} from 'redux-actions';

const navigationStateReducer = handleActions({
  [PUSH_STATE]: (state, action) => {
    if (state.routes[state.index].key === (action.payload && action.payload.key)) return state;
    return NavigationStateUtils.push(state, action.payload);
  },

  [POP_STATE]: (state, action) => {
    if (state.index === 0 || state.routes.length === 1) return state;
    return NavigationStateUtils.pop(state);
  },

  [SIDEBAR_STATE]: (state, action) => {
    if (state.routes[state.index].key === (action.payload && action.payload.key)) return state;

    if (defaultRoute.key === (action.payload && action.payload.key)) return defaultState;

    return NavigationStateUtils.push(defaultState, action.payload);
  },
}, defaultState);

export default navigationStateReducer;
