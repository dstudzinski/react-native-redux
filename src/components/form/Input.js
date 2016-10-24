import React, {PropTypes} from 'react';
import {Input as NativeInput} from 'native-base';

const Input = props => {
  const {input: {onChange}} = props;
  return (
    <NativeInput onChangeText={text => onChange(text)} {...props}/>
  )
};

PropTypes.propTypes = {
  input: PropTypes.object
};

export default Input;