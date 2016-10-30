import React from 'react';
import { Container, Header, Title, Content, Button, Icon } from 'native-base';

import ProceduresList from './components/ProceduresList';

const ProceduresListView = props => {
  const {navigator} = props;

  const goBack = () => {
    navigator.pop();
  };

  return (
    <Container>
      <Header>
        <Button transparent onPress={goBack}>
          <Icon name='md-arrow-back' />
        </Button>
        <Title>Procedures List</Title>
      </Header>

      <Content>
        <ProceduresList/>
      </Content>
    </Container>
  );
};

export default ProceduresListView;
