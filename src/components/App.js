import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import NewProcedureView from './NewProcedureView';

const App = () => {
  return (
    <View style={styles.container}>
      <NewProcedureView/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
