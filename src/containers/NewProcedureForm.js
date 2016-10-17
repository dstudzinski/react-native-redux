import {connect} from 'react-redux';
import { actions } from 'react-redux-form';

import NewProcedureForm from '../components/NewProcedureForm';
import {addProcedure} from '../redux/actions/procedures';

const mapStateToProps = state => {
  return {
    procedure: state.procedure,
    procedureForm: state.procedureForm
  }
};

const dispatchToProps = {
  submit: actions.submit,
  validate: actions.validate,
  reset: actions.reset,
  setSubmitFailed: actions.setSubmitFailed,
  setFieldsValidity: actions.setFieldsValidity,
  addProcedure
};

export default connect(mapStateToProps, dispatchToProps)(NewProcedureForm);
