import I18n from 'react-native-i18n';

import {addProcedure} from '../../../redux/data/procedures/actions';

export const newProcedureValidation = (values, props) => {
  const errors = {};

  if(!values.date){
    errors.date = I18n.t('fieldIsRequired');
  }

  if(!values.age){
    errors.age = I18n.t('fieldIsRequired');
  }

  if(!values.asa){
    errors.asa = I18n.t('fieldIsRequired');
  }

  if(!values.typeOfAnesthesia){
    errors.typeOfAnesthesia = 'Field is required';
  }

  if(!values.typeOfSupervision){
    errors.typeOfSupervision = 'Field is required';
  }

  if(!values.typeOfSurgery){
    errors.typeOfSurgery = 'Field is required';
  }

  return errors;
};

export const submitNewProcedure = (values, dispatch, props) => {
  const {reset} = props;

  dispatch(addProcedure(values));
  reset();
};