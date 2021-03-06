import I18n from 'react-native-i18n';

const getConfig = () => {
  const asaPickerItems = [
    {
      label: I18n.t('asa.1'),
      value: 1
    },
    {
      label: I18n.t('asa.2'),
      value: 2
    },
    {
      label: I18n.t('asa.3'),
      value: 3
    },
    {
      label: I18n.t('asa.4'),
      value: 4
    },
    {
      label: I18n.t('asa.5'),
      value: 5
    },
    {
      label: I18n.t('asa.6'),
      value: 6
    }
  ];

  const ageUnitPickerItems = [
    {
      label: I18n.t('years'),
      value: 1
    },
    {
      label: I18n.t('months'),
      value: 2
    }
  ];

  const typeOfAnesthesia = [
    {
      label: I18n.t('typeOfAnesthesia.1'),
      value: 1
    },
    {
      label: I18n.t('typeOfAnesthesia.2'),
      value: 2
    },
    {
      label: I18n.t('typeOfAnesthesia.3'),
      value: 3
    },
    {
      label: I18n.t('typeOfAnesthesia.4'),
      value: 4
    },
    {
      label: I18n.t('typeOfAnesthesia.5'),
      value: 5
    }
  ];

  const typeOfSupervision = [
    {
      label: I18n.t('typeOfSupervision.1'),
      value: 1
    },
    {
      label: I18n.t('typeOfSupervision.2'),
      value: 2
    }
  ];

  return {
    asaPickerItems,
    ageUnitPickerItems,
    typeOfAnesthesia,
    typeOfSupervision
  }
};

export default getConfig;
