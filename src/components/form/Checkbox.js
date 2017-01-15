import React, {PropTypes} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {CheckBox as NativeCheckbox} from 'native-base';

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 5,
    marginBottom: 25
  },
  text: {
    paddingLeft: 5,
    fontSize: 15,
    lineHeight: 24,
    color: 'black'
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

Checkbox.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object
};

export default Checkbox;