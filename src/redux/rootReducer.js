import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';

import procedures from './data/procedures/reducer';

const rootReducer = combineReducers({
  form: formReducer,
  procedures
});

export default rootReducer;
