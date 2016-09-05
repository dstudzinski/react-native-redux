import React, {PropTypes} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const ProceduresList = props => {
  const {procedures} = props;

  const getProcedures = procedures => {
    return procedures && procedures.map(procedure => {
      return <Text key={procedure._id}>{JSON.stringify(procedure)}</Text>
    })
  };

  return (
    <View style={styles.container}>
      <Text>Procedures:</Text>
      {getProcedures(procedures)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

ProceduresList.propTypes = {
  procedures: PropTypes.array
};

export default ProceduresList;
