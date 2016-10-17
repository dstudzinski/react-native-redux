import {combineReducers} from 'redux';
import { modelReducer, formReducer } from 'react-redux-form';

import procedures from './reducers/procedures';

const procedureInitialState = {
  date: '',
  age: '',
  asa: '',
  emergency: false,
  typeOfSurgery: '',
  anesthesiaTechnique: '',
  typeOfSupervision: ''
};

const rootReducer = combineReducers({
  procedure: modelReducer('procedure', procedureInitialState),
  procedureForm: formReducer('procedure'),
  procedures
});

export default rootReducer;
