import React, {PropTypes} from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text
} from 'react-native';

const TextButton = props => {
  const {text, onPress} = props;
  return(
    <TouchableHighlight onPress={onPress} underlayColor={'gray'} style={styles.button}>
      <Text>{text}</Text>
    </TouchableHighlight>
  )
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    borderColor: 'black',
    marginTop: 10
  }
});

TextButton.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string
};

export default TextButton;