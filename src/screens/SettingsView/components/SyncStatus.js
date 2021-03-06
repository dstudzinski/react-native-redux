import React, {PropTypes} from 'react';
import {StyleSheet, Text, View} from "react-native";

const styles = StyleSheet.create({
  syncData: {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15
  }
});

const SyncStatus = props => {
  return (
    <View style={styles.syncData}>
      <Text>Sync status: {props.syncState}</Text>
      <Text>Login status: {props.loginState}</Text>
      <Text>User: {props.username}</Text>
      <Text>Server: {props.server}</Text>
    </View>
  )
};

SyncStatus.propTypes = {
  syncState: PropTypes.string,
  loginState: PropTypes.string,
  username: PropTypes.string,
  server: PropTypes.string
};

// container
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    syncState: state.databaseSync.syncState,
    loginState: state.user.loginState,
    username: state.user.username,
    server: state.user.server
  }
};

export default connect(mapStateToProps)(SyncStatus);
