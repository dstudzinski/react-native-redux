import React, {PropTypes} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {CheckBox as NativeCheckbox} from 'native-base';

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 20,
    paddingLeft: 2.5,
    paddingRight: 2.5,
    paddingTop: 0,
    paddingBottom: 0
  },
  text: {
    paddingLeft: 2.5,
    fontSize: 15,
    lineHeight: 24
  }
});

const Checkbox = props => {
  const {input: {onChange, value}, label} = props;
  return (
    <View style={styles.view}>
      <NativeCheckbox checked={value} onPress={() => onChange(!value)}/>
      <Text style={styles.text}>{label}</Text>
    </View>
  )
};

PropTypes.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object
};

export default Checkbox;