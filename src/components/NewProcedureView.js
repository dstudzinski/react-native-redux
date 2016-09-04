import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import NewProcedureForm from './NewProcedureForm';

const NewProcedureView = () => {
  return (
    <View style={styles.container}>
      <NewProcedureForm/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default NewProcedureView;
