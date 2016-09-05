import React from 'react';
import {
  StyleSheet,
  Navigator
} from 'react-native';

import ROUTES from '../routes';

const App = () => {
  const renderScene = (route, navigator) => {
    const Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator}/>;
  };

  return (
    <Navigator
      style={styles.container}
      initialRoute={{name: 'newProcedureView'}}
      renderScene={renderScene}
      configureScene={() => {return Navigator.SceneConfigs.FloatFromRight;}}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
