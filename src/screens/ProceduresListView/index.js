import React from 'react';
import { Container, Header, Title, Content, Button, Icon } from 'native-base';

const ProceduresListView = props => {
  return (
    <Container>
      <Header>
        <Button transparent>
          <Icon name='md-menu' />
        </Button>
        <Title>Procedures List</Title>
      </Header>

      <Content>
      </Content>
    </Container>
  );
};

export default ProceduresListView;
