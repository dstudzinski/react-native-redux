import React, {Component} from 'react';
import I18n from 'react-native-i18n';
import {Content, Text, List, ListItem, View} from 'native-base';

import routes from '../routes';

export const Sidebar = props => {
  return (
    <Content>
      <List>
        <ListItem button onPress={() => props.sidebarState(routes['newProcedureView'])}>
          <View>
            <Text>{I18n.t(routes['newProcedureView'].title)}</Text>
          </View>
        </ListItem>
        <ListItem button onPress={() => props.sidebarState(routes['proceduresListView'])}>
          <View>
            <Text>{I18n.t(routes['proceduresListView'].title)}</Text>
          </View>
        </ListItem>
        <ListItem button onPress={() => props.sidebarState(routes['settingsView'])}>
          <View>
            <Text>{I18n.t(routes['settingsView'].title)}</Text>
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
