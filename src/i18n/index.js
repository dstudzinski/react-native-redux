import I18n from 'react-native-i18n';

import pl from './translations/pl';

const configureI18n = () => {
  // Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
  I18n.fallbacks = true;
  I18n.defaultLocale = 'pl';
  I18n.locale = 'en';

  I18n.translations = {
    pl
  };
};

export default configureI18n;