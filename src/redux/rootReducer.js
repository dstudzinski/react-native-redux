import {combineReducers} from 'redux';
import { modelReducer, formReducer } from 'react-redux-form';

import procedures from './reducers/procedures';

const procedureInitialState = {
  asa: ''
};

const rootReducer = combineReducers({
  procedure: modelReducer('procedure', procedureInitialState),
  procedureForm: formReducer('procedure'),
  procedures
});

export default rootReducer;
