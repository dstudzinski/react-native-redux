import {combineReducers} from 'redux';

import procedures from './reducers/procedures';

const rootReducer = combineReducers({
  procedures
});

export default rootReducer;
