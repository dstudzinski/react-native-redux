import {connect} from 'react-redux';

import NewProcedureForm from '../components/ProceduresList';

const mapStateToProps = state => {
  return {
    procedures: state.procedures.data
  }
};

export default connect(mapStateToProps)(NewProcedureForm);
