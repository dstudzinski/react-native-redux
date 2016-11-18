import React from 'react';
import {Container, Header, Title, Content, Button, Icon, Fab} from 'native-base';

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
          <Icon name='md-arrow-back'/>
        </Button>
        <Title>Procedures List</Title>
      </Header>

      <Content>
        <ProceduresList/>
      </Content>
      <Fab
        active={false}
        direction="right"
        containerStyle={{marginLeft: 10}}
        style={{backgroundColor: '#5067FF'}}
        position="bottomRight"
        onPress={() => {}}
      >
        <Icon name="md-add"/>
      </Fab>
    </Container>
  );
};

export default ProceduresListView;
