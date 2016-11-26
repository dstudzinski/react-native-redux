import React from 'react';
import {Container, Content, Icon, Fab} from 'native-base';

import ProceduresList from './components/ProceduresList';
import routes from '../../routes';

export const ProceduresListView = props => {
  return (
    <Container>
      <Content>
        <ProceduresList/>
      </Content>
      <Fab
        active={false}
        direction="right"
        containerStyle={{marginLeft: 10}}
        style={{backgroundColor: '#5067FF'}}
        position="bottomRight"
        onPress={() => {props.sidebarState(routes['newProcedureView'])}}
      >
        <Icon name="md-add"/>
      </Fab>
    </Container>
  );
};


// Container
import {connect} from 'react-redux';

import {sidebarState} from '../../redux/data/navigationState/actions';

export default connect(null, {sidebarState})(ProceduresListView);
