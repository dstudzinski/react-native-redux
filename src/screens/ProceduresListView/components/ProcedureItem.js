import React from 'react';
import {StyleSheet} from "react-native";
import { ListItem, Text, Thumbnail } from 'native-base';
import I18n from 'react-native-i18n';

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  }
});

export const ProcedureItem = props => {
  const {procedure} = props;

  const getDate = procedure => {
    if (procedure && procedure.date) {
      return procedure.date.toString();
    }
  };

  return (
    <ListItem style={styles.listItem}>
      <Thumbnail source={''} />
      <Text>{I18n.t(`typeOfAnesthesia.${procedure.typeOfAnesthesia}`)}</Text>
      <Text note>
        {getDate(procedure)}
      </Text>
      <Text note>
        {I18n.t(`age`)}: {procedure.age} {procedure.emergency ? I18n.t(`emergency`) : undefined} {I18n.t(`typeOfSupervision.${procedure.typeOfSupervision}`)}
      </Text>
    </ListItem>
  );
};

export default ProcedureItem;
