import React, {PropTypes, Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Picker as NativePicker} from 'native-base';

const styles = StyleSheet.create({
  view: {
    marginBottom: 10,
    height: 60
  },
  wrapper: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  picker: {
    paddingBottom: 8,
    marginLeft: -8,
    marginTop: -13,
    marginBottom: -15,
    height: 53,
    marginRight: -8
  },
  pickerLabel: {
    fontSize: 12,
    height: 15
  },
  error: {
    fontSize: 12,
    height: 20
  }
});

class Picker extends Component {
  constructor(props) {
    super(props);
  }

  getItems(items) {
    const Item = NativePicker.Item;

    return items && items.map((item, idx) => {
        return <Item key={item + idx} label={item.label} value={item.value}/>
      });
  };

  // componentDidMount() {
  //   const {input: {onChange}, items} = this.props;
  //
  //   // set first value
  //   onChange(items[0].value);
  // }

  render() {
    const {input: {onChange, value}, items, meta: {touched, error}, label} = this.props;

    return (
      <View style={styles.view}>
        <View style={styles.wrapper}>
          <Text style={styles.pickerLabel}>{label}</Text>
          <NativePicker
            style={styles.picker}
            {...this.props}
            selectedValue={value}
            onValueChange={onChange}>
            {this.getItems(items)}
          </NativePicker>
        </View>
        {touched && (error && <Text style={styles.error}>{error}</Text>)}
      </View>
    )
  }
}

Picker.propTypes = {
  items: PropTypes.array,
  input: PropTypes.object
};

export default Picker;