import React, {Component} from 'react';
import I18n from 'react-native-i18n';
import {Header as HeaderNative, Title, Button, Icon} from 'native-base';

const Header = props => {
  return (
    <HeaderNative>
      <Button transparent onPress={() => {
        props.drawer.open()
      }}>
        <Icon name='md-menu'/>
      </Button>
      <Title>{I18n.t(props.scene.route.title)}</Title>
    </HeaderNative>
  );
};

export default Header;
