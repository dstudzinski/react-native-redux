// Component
import React from "react";
import {StyleSheet, View} from "react-native";
import {Field} from 'redux-form';
import {List, ListItem, Button} from 'native-base';
import I18n from 'react-native-i18n';

import Input from '../../../components/form/Input';

const styles = StyleSheet.create({
  view: {
    paddingLeft: 15
  },
  loginButton: {
    marginTop: 50,
    marginRight: 15
  },
  list: {
    marginRight: 15,
    marginTop: 30
  }
});

export const LoginForm = props => {
  const {handleSubmit} = props;

  return (
    <View style={styles.view}>
      <List style={styles.list}>
        <Field name="server" placeholder={I18n.t('server')} component={Input}/>
        <Field name="login" placeholder={I18n.t('login')} component={Input}/>
        <Field name="password" placeholder={I18n.t('password')} component={Input} secureTextEntry={true}/>
      </List>
      <Button block style={styles.loginButton} onPress={handleSubmit}>{I18n.t('login')}</Button>
    </View>
  );
};

// Container
import {reduxForm} from 'redux-form';
import {loginValidation, submitLogin} from '../services/login';

export default reduxForm({
  form: 'LoginForm',
  validate: loginValidation,
  onSubmit: submitLogin
})(LoginForm);
