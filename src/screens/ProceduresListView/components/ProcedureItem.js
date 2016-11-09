import React from 'react';
import { ListItem, Text } from 'native-base';

export const ProcedureItem = props => {
  const {procedure} = props;

  return (
    <ListItem>
      <Text>{procedure.typeOfAnesthesia}</Text>
      <Text note>{JSON.stringify(procedure)}</Text>
    </ListItem>
  );
};

export default ProcedureItem;
