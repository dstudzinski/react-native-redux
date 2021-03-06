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

  if(!values.ageUnit){
    errors.ageUnit = I18n.t('fieldIsRequired');
  }

  if(!values.asa){
    errors.asa = I18n.t('fieldIsRequired');
  }

  if(!values.typeOfAnesthesia){
    errors.typeOfAnesthesia = I18n.t('fieldIsRequired');
  }

  if(!values.typeOfSupervision){
    errors.typeOfSupervision = I18n.t('fieldIsRequired');
  }

  if(!values.typeOfSurgery){
    errors.typeOfSurgery = I18n.t('fieldIsRequired');
  }

  return errors;
};

export const submitNewProcedure = (values, dispatch, props) => {
  const {reset} = props;

  values.age = Number(values.age);
  if (values.ageUnit === 1) {
    values.age = values.age * 12;
  }

  dispatch(addProcedure(values));
  reset();
  //after reset should reset to default values but dropdowns are empty...
};