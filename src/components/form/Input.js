import React, {PropTypes} from 'react';
import {View, Text} from 'react-native';
import {Input as NativeInput} from 'native-base';

const Input = props => {
  const {input: {onChange}, meta: {touched, error}} = props;

  return (
    <View>
      <NativeInput onChangeText={text => onChange(text)} {...props}/>
      {touched && (error && <Text>{error}</Text>)}
    </View>
  )
};

PropTypes.propTypes = {
  input: PropTypes.object
};

export default Input;