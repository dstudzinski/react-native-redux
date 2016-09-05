import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import NewProcedureForm from '../containers/NewProcedureForm';
import TextButton from '../components/TextButton';

const NewProcedureView = props => {
  const onPress = () => {
    props.navigator.push({name: 'proceduresListView'});
  };

  return (
    <View style={styles.container}>
      <NewProcedureForm/>
      <TextButton text="See all" onPress={onPress}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default NewProcedureView;
