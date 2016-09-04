import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import ProceduresList from './ProceduresList';

const ProceduresListView = () => {
  return (
    <View style={styles.container}>
      <ProceduresList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default ProceduresListView;
