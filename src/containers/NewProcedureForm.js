import {connect} from 'react-redux';

import NewProcedureForm from '../components/NewProcedureForm';
import {addProcedure} from '../redux/actions/procedures';

export default connect(null, {addProcedure})(NewProcedureForm);
