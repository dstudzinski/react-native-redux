import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';

import NewProcedureForm from '../containers/NewProcedureForm';
import TextButton from '../components/TextButton';

const NewProcedureView = props => {
  const onPress = () => {
    props.navigator.push({name: 'proceduresListView'});
  };

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
        <TextButton text="See all" onPress={onPress} />
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default NewProcedureView;
