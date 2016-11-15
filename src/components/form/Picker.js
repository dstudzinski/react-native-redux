import React, {PropTypes} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Picker as NativePicker} from 'native-base';

const styles = StyleSheet.create({
  picker: {
    justifyContent: 'center',
    height: 20,
    paddingTop: 0,
    paddingBottom: 0
  }
});

const Picker = props => {
  const {input: {onChange, value}, items, meta: {touched, error}} = props;

  const Item = NativePicker.Item;

  const getItems = items => {
    return items && items.map((item, idx) => {
        return <Item key={item + idx} label={item.label} value={item.value}/>
      });
  };

  return (
    <View>
      <NativePicker
        style={styles.picker}
        {...props}
        selectedValue={value}
        onValueChange={onChange}>
        {getItems(items)}
      </NativePicker>
      {touched && (error && <Text>{error}</Text>)}
    </View>
  )
};

PropTypes.propTypes = {
  items: PropTypes.array,
  input: PropTypes.object
};

export default Picker;