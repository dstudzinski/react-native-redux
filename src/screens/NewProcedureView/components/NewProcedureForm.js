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
    marginRight: 15,
    marginLeft: 15,
    marginTop: 15
  },
  listRow: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  age: {
    width: 150,
    marginRight: 10,
    // alignSelf: 'flex-end'
  }
});

export const NewProcedureForm = props => {
  const {handleSubmit} = props;
  const config = getConfig();

  return (
    <View>
      <List style={styles.list}>
        <Field name="date" placeholder={I18n.t('date')} component={DatePicker}/>
        <Field name="asa" label={I18n.t('asaLabel')} items={config.asaPickerItems} mode="dropdown" component={Picker}/>
        <View style={styles.listRow}>
          <Field name="age" style={styles.age} placeholder={I18n.t('age')} keyboardType="numeric" component={Input}/>
          <Field name="ageUnit" label={I18n.t('ageUnitLabel')} items={config.ageUnitPickerItems} mode="dropdown" component={Picker}/>
        </View>
        <Field name="emergency" label={I18n.t('emergency')} component={Checkbox}/>
        <Field name="typeOfAnesthesia" label={I18n.t('typeOfAnesthesiaLabel')} items={config.typeOfAnesthesia} mode="dropdown"
               component={Picker}/>
        <Field name="typeOfSupervision" label={I18n.t('typeOfSupervisionLabel')} items={config.typeOfSupervision} mode="dropdown"
               component={Picker}/>
        <Field name="typeOfSurgery" placeholder={I18n.t('typeOfSurgery')} component={Input}/>
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
