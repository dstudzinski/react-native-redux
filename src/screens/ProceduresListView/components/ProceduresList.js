import React from 'react';
import {List} from 'native-base';
import {orderBy} from 'lodash';

import ProcedureItem from './ProcedureItem';

export const ProceduresList = props => {
  const {procedures} = props;

  const getProcedures = procedures => {
    const sortedProcedures = orderBy(procedures, ['date'], ['desc']);

    return sortedProcedures && sortedProcedures.map((procedure, idx) => {
        if (procedure.date) {
          return <ProcedureItem key={idx} procedure={procedure}/>
        }
      })
  };

  return (
    <List>
      {getProcedures(procedures)}
    </List>
  );
};

// container
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    procedures: state.procedures.data
  }
};

export default connect(mapStateToProps)(ProceduresList);
