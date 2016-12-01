import React, {PropTypes} from 'react';
import {StyleSheet, Text, View} from "react-native";

const SyncStatus = props => {
  return (
    <View>
      <Text>Sync status: {props.syncState}</Text>
      <Text>Login status: {props.loginState}</Text>
    </View>
  )
};

PropTypes.propTypes = {
  syncState: PropTypes.string
};

// container
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    syncState: state.database.syncState,
    loginState: state.database.loginState
  }
};

export default connect(mapStateToProps)(SyncStatus);
