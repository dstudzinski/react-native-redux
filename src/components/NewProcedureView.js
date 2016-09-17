import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import NewProcedureForm from '../containers/NewProcedureForm';
import TextButton from '../components/TextButton';

const NewProcedureView = props => {
  const onPress = () => {
    props.navigator.push({name: 'proceduresListView'});
  };

  return (
    <View style={styles.container}>
      <View style={{backgroundColor: 'red', height: 20}}>
        <Text>Toolbar</Text>
      </View>
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
