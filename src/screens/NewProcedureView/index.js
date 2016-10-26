import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Container, Header, Title, Content, Button, Icon } from 'native-base';

import NewProcedureForm from './components/NewProcedureForm';

const NewProcedureView = props => {
  return (
    <Container>
      <Header>
        <Button transparent>
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
