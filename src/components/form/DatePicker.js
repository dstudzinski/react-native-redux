import React, {Component, PropTypes} from 'react';
import {StyleSheet, DatePickerAndroid, TouchableWithoutFeedback, Text, View} from "react-native";

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    height: 40,
    paddingLeft: 2.5,
    paddingRight: 2.5
  },
  text: {
    fontSize: 15
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
    const {input: {value}, label, meta: {touched, error}} = this.props;
    const currentValue = value ? value : undefined;

    return (
      <View>
        <TouchableWithoutFeedback
          ref={c => this.picker = c}
          onPress={() => this.showPicker(this.picker, {date: currentValue})}
        >
          <View style={styles.view}>
            <Text style={styles.text}>{value && value.toLocaleDateString() || label}</Text>
          </View>
        </TouchableWithoutFeedback>
        {touched && (error && <Text>{error}</Text>)}
      </View>
    )
  }
}

PropTypes.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object
};

export default DatePicker;