import React, {PropTypes} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text
} from 'react-native';
import { Field } from 'react-redux-form/lib/native';

import TextButton from './TextButton';

const NewProcedureForm = props => {
  const {addProcedure, submit, validate, procedure, procedureForm} = props;
  const onPress = () => {
    console.log('onpress');
    if (procedureForm.valid) {
      console.log('valid');
      // move to service
      const addProcedurePromise = new Promise(resolve => {
        addProcedure({title: 'title'});
        resolve();
      });
      submit('procedure', addProcedurePromise);
    } else {
      console.log('form errors');
    }

  };

  return (
    <View style={styles.container}>
      <Text>Add new procedure</Text>
        <Field model="procedure.asa">
          <TextInput/>
        </Field>
        <TextButton text="Add" onPress={onPress}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

NewProcedureForm.propTypes = {
  procedure: PropTypes.object,
  procedureForm: PropTypes.object,
  addProcedure: PropTypes.func,
  submit: PropTypes.func,
  validate: PropTypes.func
};

export default NewProcedureForm;
