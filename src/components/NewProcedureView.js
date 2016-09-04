import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import NewProcedureForm from '../containers/NewProcedureForm';
import ProceduresList from '../containers/ProceduresList';

const NewProcedureView = () => {
  return (
    <View style={styles.container}>
      <NewProcedureForm/>
      <ProceduresList/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default NewProcedureView;
