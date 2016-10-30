import React from 'react';
import { Container, Header, Title, Content, Button, Icon } from 'native-base';

import NewProcedureForm from './components/NewProcedureForm';

const NewProcedureView = props => {
  const {drawer} = props;

  const openDrawer = () => {
    drawer.open();
  };

  return (
    <Container>
      <Header>
        <Button transparent onPress={openDrawer}>
          <Icon name='md-menu' />
        </Button>
        <Title>New Procedure</Title>
      </Header>

      <Content>
        <NewProcedureForm/>
      </Content>
    </Container>
  );
};

export default NewProcedureView;
