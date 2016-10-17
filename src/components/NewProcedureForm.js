import React, {PropTypes} from "react";
import {StyleSheet, View, Text, Picker, DatePickerAndroid} from "react-native";
import {Form, Control, Errors} from "react-redux-form/lib/native";
import TextButton from "./TextButton";

const NewProcedureForm = props => {
  const {addProcedure, submit, validate, procedure, procedureForm, reset, setSubmitFailed, setFieldsValidity} = props;
  const onPress = () => {
    console.log('onpress');
    setSubmitFailed('procedure');
    setFieldsValidity('procedure', {}, {errors: true});
    if (procedureForm.valid) {
      console.log('valid');
      console.log(props);
      // move to service
      const addProcedurePromise = new Promise(resolve => {
        addProcedure({title: 'title'});
        reset('procedure');
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
        <Form model="procedure">
          <Control.TextInput
            model=".date" placeholder="Date"
            validators={{
              required: (val) => val && val.length,
            }}
          />
          <Errors model=".date" show="touched" messages={{
            required: 'Please provide date'
          }}/>
          <Control.TextInput model=".age" placeholder="Age" keyboardType="numeric"/>
          <Control.Picker model=".asa">
            <Control.Picker.Item label="" value="" />
            <Control.Picker.Item label="1" value="1" />
            <Control.Picker.Item label="2" value="2" />
            <Control.Picker.Item label="3" value="3" />
            <Control.Picker.Item label="4" value="4" />
            <Control.Picker.Item label="5" value="5" />
            <Control.Picker.Item label="6" value="6" />
          </Control.Picker>
          <Control.Switch model=".emergency"/>
          <Control.TextInput model=".typeOfSurgery" placeholder="Type of surgery"/>
          <Control.Picker model=".anesthesiaTechnique">
            <Control.Picker.Item label="" value="" />
            <Control.Picker.Item label="og" value="og" />
            <Control.Picker.Item label="zo" value="zo" />
            <Control.Picker.Item label="pp" value="pp" />
            <Control.Picker.Item label="bn" value="bn" />
          </Control.Picker>
          <Control.Picker model=".typeOfSupervision">
            <Control.Picker.Item label="" value="" />
            <Control.Picker.Item label="sam." value="sam" />
            <Control.Picker.Item label="współ." value="wspol" />
          </Control.Picker>
          <TextButton text="Add" onPress={onPress}/>
        </Form>
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
  reset: PropTypes.func,
  validate: PropTypes.func
};

export default NewProcedureForm;
