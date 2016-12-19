// Component
import React from "react";
import {StyleSheet, View} from "react-native";
import {Button} from 'native-base';
import I18n from 'react-native-i18n';

const styles = StyleSheet.create({
  logoutButton: {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15
  }
});

export const LogoutForm = props => {
  const {handleSubmit} = props;

  return (
    <View>
      <Button block style={styles.logoutButton} onPress={handleSubmit}>{I18n.t('logout')}</Button>
    </View>
  );
};

// Container
import {reduxForm} from 'redux-form';
import {submitLogout} from '../services/login';

export default reduxForm({
  form: 'LogoutForm',
  onSubmit: submitLogout
})(LogoutForm);
