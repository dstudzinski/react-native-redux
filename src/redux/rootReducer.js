import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';

import procedures from './data/procedures/reducer';
import navigationState from './data/navigationState/reducer';
import databaseSync from './data/databaseSync/reducer';
import user from './data/user/reducer';

const rootReducer = combineReducers({
  form: formReducer,
  procedures,
  navigationState,
  databaseSync,
  user
});

export default rootReducer;
