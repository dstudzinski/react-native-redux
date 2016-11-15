import React, {PropTypes, Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Input as NativeInput} from 'native-base';

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    height: 20,
    paddingLeft: 2.5,
    paddingRight: 2.5,
    paddingTop: 0,
    paddingBottom: 0
  }
});


class Input extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const {input: {value: newVal}} = this.props;
    const {input: {value: oldVal}} = prevProps;

    if(newVal === '' && newVal !== oldVal) {
      this.nativeInput._textInput.clear();
    }
  }

  onSubmit() {
    this.nativeInput._textInput.blur();
    this.nativeInput._textInput.blur();
  }

  render() {
    const {input: {onChange}, meta: {touched, error}} = this.props;

    return (
      <View>
        <NativeInput
          style={styles.view}
          ref={r => this.nativeInput = r}
          onSubmitEditing={this.onSubmit}
          onChangeText={text => onChange(text)}
          {...this.props}/>
        {touched && (error && <Text>{error}</Text>)}
      </View>
    )
  }
}

PropTypes.propTypes = {
  input: PropTypes.object
};

export default Input;