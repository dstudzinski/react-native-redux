import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';

import procedures from './data/procedures/reducer';
import navigationState from './data/navigationState/reducer';

const rootReducer = combineReducers({
  form: formReducer,
  procedures,
  navigationState
});

export default rootReducer;
