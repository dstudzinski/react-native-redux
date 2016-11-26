import React from 'react';
import {Container, Content} from 'native-base';

import NewProcedureForm from './components/NewProcedureForm';

const NewProcedureView = props => {
  return (
    <Container>
      <Content>
        <NewProcedureForm/>
      </Content>
    </Container>
  );
};

export default NewProcedureView;
