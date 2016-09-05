import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import ProceduresList from '../containers/ProceduresList';
import TextButton from './TextButton';

const ProceduresListView = props => {
  const onPress = () => {
    props.navigator.push({name: 'newProcedureView'});
  };

  return (
    <View style={styles.container}>
      <TextButton text="Add new" onPress={onPress}/>
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
