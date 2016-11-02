import React, {PropTypes, Component} from 'react';
import {View, Text} from 'react-native';
import {Input as NativeInput} from 'native-base';

class Input extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState) {
    const {input: {value: newVal}} = this.props;
    const {input: {value: oldVal}} = prevProps;

    if(newVal === '' && newVal !== oldVal) {
      this.nativeInput._textInput.clear();
    }
  }

  render() {
    const {input: {onChange}, meta: {touched, error}} = this.props;

    return (
      <View>
        <NativeInput ref={r => this.nativeInput = r} onChangeText={text => onChange(text)} {...this.props}/>
        {touched && (error && <Text>{error}</Text>)}
      </View>
    )
  }
}

PropTypes.propTypes = {
  input: PropTypes.object
};

export default Input;