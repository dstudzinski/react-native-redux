import {connect} from 'react-redux';

import NewProcedureForm from '../components/ProceduresList';

const mapStateToProps = state => {
  return {
    procedures: [...state.procedures.data].map(([key, procedure]) => procedure)
  }
};

export default connect(mapStateToProps)(NewProcedureForm);
