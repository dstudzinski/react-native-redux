// Component
import React, {PropTypes} from "react";
import {StyleSheet, View, Text} from "react-native";
import {Field} from 'redux-form';
import {List, ListItem} from 'native-base';

import DatePicker from '../../components/form/DatePicker';
import Input from '../../components/form/Input';
import Picker from '../../components/form/Picker';
import Checkbox from '../../components/form/Checkbox';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export const NewProcedureForm = props => {
  // move to config
  const asaPickerItems = [
    {
      label: 'ASA',
      value: ''
    },
    {
      label: '1',
      value: 1
    },
    {
      label: '2',
      value: 2
    },
    {
      label: '3',
      value: 3
    },
    {
      label: '4',
      value: 4
    },
    {
      label: '5',
      value: 5
    },
    {
      label: '6',
      value: 6
    }
  ];

  const typeOfSurgery = [
    {
      label: 'Type of surgery',
      value: ''
    },
    {
      label: 'og',
      value: 1
    },
    {
      label: 'zo',
      value: 2
    },
    {
      label: 'pp',
      value: 3
    },
    {
      label: 'bn',
      value: 4
    }
  ];

  const typeOfSupervision = [
    {
      label: 'Type of supervision',
      value: ''
    },
    {
      label: 'sam.',
      value: 1
    },
    {
      label: 'współ.',
      value: 2
    }
  ];

  return (
    <View style={styles.container}>
      <List>
        <ListItem>
          <Field name="date" placeholder="Date" label={'Date'} component={DatePicker}/>
        </ListItem>
        <ListItem>
          <Field name="age" placeholder="Age" keyboardType="numeric" component={Input}/>
        </ListItem>
        <ListItem>
          <Field name="asa" placeholder="Asa" items={asaPickerItems} mode="dropdown" component={Picker}/>
        </ListItem>
        <ListItem>
          <Field name="emergency" placeholder="Emergency" label={'Emergency'} component={Checkbox}/>
        </ListItem>
        <ListItem>
          <Field name="typeOfSurgery" placeholder="Type of surgery" items={typeOfSurgery} mode="dropdown" component={Picker}/>
        </ListItem>
        <ListItem>
          <Field name="typeOfSupervision" placeholder="Type of supervision" items={typeOfSupervision} mode="dropdown" component={Picker}/>
        </ListItem>
      </List>
    </View>
  );
};

// Container
import { reduxForm } from 'redux-form';

export default reduxForm({
  form: 'NewProcedureForm'
})(NewProcedureForm);
