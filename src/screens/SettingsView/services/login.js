import I18n from 'react-native-i18n';

import {setupRemoteDatabaseConnection} from '../../../services/database';

export const loginValidation = (values, props) => {
  const errors = {};

  if(!values.login){
    errors.login = I18n.t('fieldIsRequired');
  }

  if(!values.password){
    errors.password = I18n.t('fieldIsRequired');
  }

  return errors;
};

export const submitLogin = (values, dispatch, props) => {
  const {reset} = props;

  setupRemoteDatabaseConnection(values.login, values.password)
    .then(result => {
      // set that user is logged in
      reset();
    })
    .catch(err => {
      // show message that login unsuccessful
      // do not clear form
      console.error('something wrong');
    })
};