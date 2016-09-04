import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text
} from 'react-native';

import TextButton from './TextButton';

const NewProcedureForm = () => {
  const onPress = () => {
    console.log(arguments);
  };
  return (
    <View style={styles.container}>
      <Text>Add new procedure</Text>
      <TextInput style={styles.textInput} value={'test'}/>
      <TextInput style={styles.textInput} value={'test'}/>
      <TextButton text="Add" onPress={onPress}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default NewProcedureForm;
