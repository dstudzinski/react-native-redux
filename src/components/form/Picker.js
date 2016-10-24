import React, {PropTypes} from 'react';
import {Picker as NativePicker, Item} from 'native-base';

const Picker = props => {
  const {input: {onChange, value}, items} = props;

  const getItems = items => {
    return items && items.map((item, idx) => {
        // first item should be label item:
        if (idx === 0) {
          return <Item key={item} label={item.label} value={item.value} />
        }

        return <Item key={item} label={item.label} value={item.value} />
    });
  };

  return (
    <NativePicker
      {...props}
      selectedValue={value}
      onValueChange={onChange}>
      {getItems(items)}
    </NativePicker>
  )
};

PropTypes.propTypes = {
  items: PropTypes.array,
  input: PropTypes.object
};

export default Picker;