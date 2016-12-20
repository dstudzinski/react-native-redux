import React, {PropTypes} from 'react';
import {StyleSheet, Text, View} from "react-native";

const SyncStatus = props => {
  return (
    <View>
      <Text>Sync status: {props.syncState}</Text>
      <Text>Login status: {props.loginState}</Text>
      <Text>User: {JSON.stringify(props.user, null ,2)}</Text>
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
    syncState: state.databaseSync.syncState,
    loginState: state.user.loginState,
    user: state.user.user,
  }
};

export default connect(mapStateToProps)(SyncStatus);
