import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';

import procedures from './data/procedures/proceduresReducer';

const rootReducer = combineReducers({
  form: formReducer,
  procedures
});

export default rootReducer;
