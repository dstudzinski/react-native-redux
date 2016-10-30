import {addProcedure} from '../../../redux/actions/procedures';

export const newProcedureValidation = (values, props) => {
  const errors = {};

  if(!values.date){
    errors.date = 'Field is required';
  }

  if(!values.age){
    errors.age = 'Field is required';
  }

  if(!values.asa){
    errors.asa = 'Field is required';
  }

  if(!values.typeOfSurgery){
    errors.typeOfSurgery = 'Field is required';
  }

  if(!values.typeOfSupervision){
    errors.typeOfSupervision = 'Field is required';
  }

  return errors;
};

export const submitNewProcedure = (values, dispatch, props) => {
  dispatch(addProcedure(values));
};