import React, {Component} from 'react';
import {
  StyleSheet,
  Navigator,
  Text,
  StatusBar
} from 'react-native';
import Drawer from 'react-native-drawer';

import routes from '../routes';
import Sidebar from '../components/Sidebar';

class App extends Component {
  constructor(props) {
    super(props);

    this.renderScene = this.renderScene.bind(this);
    this.navigate = this.navigate.bind(this);
  }

  renderScene(route, navigator) {
    const Component = routes[route.name];

    // TODO: check if Component -> if not then return default view (NewProcedureView)
    return <Component route={route} navigator={navigator} drawer={this._drawer}/>;
  };

  navigate(routeName) {
    this._navigator.push({name: routeName});
    this._drawer.close();
  }

  render() {
    return (
      <Drawer
        ref={c => this._drawer = c}
        type="overlay"
        content={<Sidebar navigate={this.navigate}/>}
        tapToClose={true}
        open={false}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        styles={{
          drawer: {shadowColor: '#ff0000', shadowOpacity: 0.8, shadowRadius: 3, backgroundColor: '#ffffff'},
          main: {paddingLeft: 3}
        }}
        tweenHandler={(ratio) => ({
          main: {opacity: (2 - ratio) / 2}
        })}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <Navigator
          initialRoute={{name: 'newProcedureView'}}
          renderScene={this.renderScene}
          configureScene={() => {
            return Navigator.SceneConfigs.FadeAndroid;
          }}
          ref={c => this._navigator = c}
        />
      </Drawer>
    );
  }
}

export default App;
