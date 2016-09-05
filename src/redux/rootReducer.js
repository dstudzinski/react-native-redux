import {combineReducers} from 'redux';
import { modelReducer, formReducer } from 'react-redux-form';

import procedures from './reducers/procedures';

const rootReducer = combineReducers({
  procedure: modelReducer('procedure'),
  procedureForm: formReducer('procedure'),
  procedures
});

export default rootReducer;
