import React, {PropTypes} from "react";
import {StyleSheet, View, Text, Picker, DatePickerAndroid} from "react-native";
import {Form, Control, Errors} from "react-redux-form/lib/native";
import {Container, Content, List, ListItem, InputGroup, Input, Picker, Item, Icon} from 'native-base';

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
      <Form model="procedure">
        <List>
          <ListItem>
            <InputGroup>
              <Control.TextInput
                model=".date" placeholder="Date"
                keyboardType="numeric"
                component={Input}
                validators={{
                  required: (val) => !!val
                }}
              />
              <Errors model=".date" show="touched" messages={{
                required: 'Please provide date'
              }}/>
            </InputGroup>
          </ListItem>
          <ListItem>
            <InputGroup>
              <Control.TextInput
                model=".age"
                placeholder="Age"
                keyboardType="numeric"
                component={Input}
                validators={{
                  required: (val) => !!val
                }}
              />
              <Errors model=".date" show="touched" messages={{
                required: 'Please provide age'
              }}/>
            </InputGroup>
          </ListItem>
          <ListItem>
            <Control.Picker
              model=".asa"
              validators={{
                required: (val) => !!val
              }}
              component={Picker}>
              <Control.Picker.Item label="Select ASA" value="" component={Item}/>
              <Control.Picker.Item label="1" value="1" component={Item}/>
              <Control.Picker.Item label="2" value="2" component={Item}/>
              <Control.Picker.Item label="3" value="3" component={Item}/>
              <Control.Picker.Item label="4" value="4" component={Item}/>
              <Control.Picker.Item label="5" value="5" component={Item}/>
              <Control.Picker.Item label="6" value="6" component={Item}/>
            </Control.Picker>
            <Errors model=".date" show="touched" messages={{
              required: 'Please select ASA'
            }}/>
          </ListItem>
          <Control.Switch model=".emergency"/>
          <Control.TextInput model=".typeOfSurgery" placeholder="Type of surgery"/>
          <Control.Picker model=".anesthesiaTechnique">
            <Control.Picker.Item label="" value=""/>
            <Control.Picker.Item label="og" value="og"/>
            <Control.Picker.Item label="zo" value="zo"/>
            <Control.Picker.Item label="pp" value="pp"/>
            <Control.Picker.Item label="bn" value="bn"/>
          </Control.Picker>
          <Control.Picker model=".typeOfSupervision">
            <Control.Picker.Item label="" value=""/>
            <Control.Picker.Item label="sam." value="sam"/>
            <Control.Picker.Item label="współ." value="wspol"/>
          </Control.Picker>
          <TextButton text="Add" onPress={onPress}/>
        </List>
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
