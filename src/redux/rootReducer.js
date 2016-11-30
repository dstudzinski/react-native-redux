import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';

import procedures from './data/procedures/reducer';
import navigationState from './data/navigationState/reducer';
import database from './data/database/reducer';

const rootReducer = combineReducers({
  form: formReducer,
  procedures,
  navigationState,
  database
});

export default rootReducer;
