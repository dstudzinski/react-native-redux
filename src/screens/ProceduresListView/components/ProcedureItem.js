import React from 'react';
import {StyleSheet} from "react-native";
import { ListItem, Text, Thumbnail } from 'native-base';
import I18n from 'react-native-i18n';
import moment from 'moment-timezone';

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: 0,
    paddingBottom: 5
  }
});

export const ProcedureItem = props => {
  const {procedure} = props;

  const getDate = procedure => {
    if (procedure && procedure.date) {
      return moment(procedure.date).format('YYYY-MM-DD');
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
        {procedure.ageUnit === 1 ? procedure.age/12 + ` ${I18n.t(`years`)}, ` : procedure.age + ` ${I18n.t(`months`)}, `}
        {procedure.emergency ? I18n.t(`emergency`) + ', ' : undefined}
        {'ASA: ' + procedure.asa + ', '}
        {I18n.t(`typeOfSupervision.${procedure.typeOfSupervision}`)}
      </Text>
      <Text note>

      </Text>
      <Text note>
        {procedure.typeOfSurgery}
      </Text>
    </ListItem>
  );
};

export default ProcedureItem;
