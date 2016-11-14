import {addProcedure} from '../../../redux/data/procedures/proceduresActions';

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