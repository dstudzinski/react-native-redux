import React, {Component} from 'react';
import {Content, Text, List, ListItem, Icon, View} from 'native-base';

const Sidebar = props => {
  return (
    <Content>
      <List>
        <ListItem button onPress={() => props.navigate('newProcedureView')}>
          <View>
            <Text>New Procedure</Text>
          </View>
        </ListItem>
        <ListItem button onPress={() => props.navigate('proceduresListView')}>
          <View>
            <Text>Procedures List</Text>
          </View>
        </ListItem>
      </List>
    </Content>
  );
};

export default Sidebar;