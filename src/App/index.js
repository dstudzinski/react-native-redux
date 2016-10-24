import React from 'react';
import {
  StyleSheet,
  Navigator,
  Text,
  StatusBar
} from 'react-native';
import Drawer from 'react-native-drawer';

import routes from '../routes';

const App = () => {
  const renderScene = (route, navigator) => {
    const Component = routes[route.name];
    return <Component route={route} navigator={navigator}/>;
  };

  return (
    <Drawer
      ref={(ref) => this._drawer = ref}
      type="overlay"
      content={<Text>some menu items</Text>}
      tapToClose={true}
      open={false}
      openDrawerOffset={0.2}
      panCloseMask={0.2}
      closedDrawerOffset={-3}
      styles={{
        drawer: {shadowColor: '#ff0000', shadowOpacity: 0.8, shadowRadius: 3, backgroundColor: '#ff0000'},
        main: {paddingLeft: 3}
      }}
      tweenHandler={(ratio) => ({
        main: { opacity:(2-ratio)/2 }
      })}>
      <StatusBar
        backgroundColor="blue"
        barStyle="light-content"
      />
      <Navigator
        style={styles.container}
        initialRoute={{name: 'newProcedureView'}}
        renderScene={renderScene}
        configureScene={() => {return Navigator.SceneConfigs.FadeAndroid;}}
      />
    </Drawer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
