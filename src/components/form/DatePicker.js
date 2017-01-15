import React, {Component, PropTypes} from 'react';
import {StyleSheet, DatePickerAndroid, TouchableWithoutFeedback, Text, View} from "react-native";

const styles = StyleSheet.create({
  view: {
    height: 35,
    marginBottom: 10
  },
  wrapper: {
    justifyContent: 'center',
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  text: {
    fontSize: 15
  },
  error: {
    fontSize: 12,
    height: 20
  }
});

class DatePicker extends Component {
  constructor(props) {
    super(props);

    this.showPicker = this.showPicker.bind(this);
  }

  showPicker = async(stateKey, options) => {
    const {input: {onChange}} = this.props;

    try {
      const {action, year, month, day} = await DatePickerAndroid.open(options);

      if (action !== DatePickerAndroid.dismissedAction) {
        onChange(new Date(year, month, day));
      }
    } catch ({code, message}) {
      console.warn(`Error in DatePicker '${stateKey}': `, message);
    }
  };

  render() {
    const {input: {value}, placeholder, meta: {touched, error}} = this.props;
    const currentValue = value ? value : undefined;

    return (
      <View style={styles.view}>
        <TouchableWithoutFeedback
          ref={c => this.picker = c}
          onPress={() => this.showPicker(this.picker, {date: currentValue})}
        >
          <View style={styles.wrapper}>
            <Text style={styles.text}>{value && value.toLocaleDateString() || placeholder}</Text>
          </View>
        </TouchableWithoutFeedback>
        {touched && (error && <Text style={styles.error}>{error}</Text>)}
      </View>
    )
  }
}

DatePicker.propTypes = {
  placeholder: PropTypes.string,
  input: PropTypes.object
};

export default DatePicker;