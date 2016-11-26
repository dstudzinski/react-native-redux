import React, {Component} from 'react';
import {Content, Text, List, ListItem, Icon, View} from 'native-base';

import routes from '../routes';

export const Sidebar = props => {
  return (
    <Content>
      <List>
        <ListItem button onPress={() => props.sidebarState(routes['newProcedureView'])}>
          <View>
            <Text>New Procedure</Text>
          </View>
        </ListItem>
        <ListItem button onPress={() => props.sidebarState(routes['proceduresListView'])}>
          <View>
            <Text>Procedures List</Text>
          </View>
        </ListItem>
      </List>
    </Content>
  );
};

// Container
import {connect} from 'react-redux';

import {sidebarState} from '../redux/data/navigationState/actions';

export default connect(null, {sidebarState})(Sidebar);
