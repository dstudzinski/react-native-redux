// Component
import React from "react";
import {StyleSheet, View} from "react-native";
import {Field} from 'redux-form';
import {List, ListItem, Button} from 'native-base';
import I18n from 'react-native-i18n';

import DatePicker from '../../../components/form/DatePicker';
import Input from '../../../components/form/Input';
import Picker from '../../../components/form/Picker';
import Checkbox from '../../../components/form/Checkbox';
import getConfig from '../../../configs/newProcedureForm';

const styles = StyleSheet.create({
  addButton: {
    marginTop: 50,
    marginLeft: 15,
    marginRight: 15
  },
  list: {
    marginRight: 15
  }
});

export const NewProcedureForm = props => {
  const {handleSubmit} = props;
  const config = getConfig();

  return (
    <View>
      <List style={styles.list}>
        <ListItem>
          <Field name="date" label={I18n.t('date')} component={DatePicker}/>
        </ListItem>
        <ListItem>
          <Field name="age" placeholder={I18n.t('age')} keyboardType="numeric" component={Input}/>
        </ListItem>
        <ListItem>
          <Field name="asa" items={config.asaPickerItems} mode="dropdown" component={Picker}/>
        </ListItem>
        <ListItem>
          <Field name="emergency" label={I18n.t('emergency')} component={Checkbox}/>
        </ListItem>
        <ListItem>
          <Field name="typeOfAnesthesia" items={config.typeOfAnesthesia} mode="dropdown"
                 component={Picker}/>
        </ListItem>
        <ListItem>
          <Field name="typeOfSupervision" items={config.typeOfSupervision} mode="dropdown"
                 component={Picker}/>
        </ListItem>
        <ListItem>
          <Field name="typeOfSurgery" placeholder={I18n.t('typeOfSurgery')} component={Input}/>
        </ListItem>
      </List>
      <Button block style={styles.addButton} onPress={handleSubmit}>{I18n.t('add')}</Button>
    </View>
  );
};

// Container
import {reduxForm} from 'redux-form';
import {newProcedureValidation, submitNewProcedure} from '../services/procedure';

export default reduxForm({
  form: 'NewProcedureForm',
  validate: newProcedureValidation,
  onSubmit: submitNewProcedure
})(NewProcedureForm);
