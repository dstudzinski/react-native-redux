import React, {PropTypes, Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Input as NativeInput} from 'native-base';

const styles = StyleSheet.create({
  view: {
    marginBottom: 10,
    height: 46
  },
  input: {
    justifyContent: 'center',
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    height: 27,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  error: {
    fontSize: 12,
    height: 20
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

    const customProps = Object.assign({}, this.props);
    delete customProps.style;

    return (
      <View style={[styles.view, this.props.style]}>
        <NativeInput
          style={styles.input}
          ref={r => this.nativeInput = r}
          onSubmitEditing={this.onSubmit}
          onChangeText={text => onChange(text)}
          placeholder="test"
          {...customProps}
          />
        {touched && (error && <Text style={styles.error}>{error}</Text>)}
      </View>
    )
  }
}

Input.propTypes = {
  input: PropTypes.object
};

export default Input;