import React, {PropTypes} from 'react';
import {Container, Content} from 'native-base';

import LoginForm from './components/LoginForm';
import SyncStatus from './components/SyncStatus';
import {USER_LOGGED_IN} from '../../configs/constants';

const LoginView = props => {
  return (
    <Container>
      <Content>
        <SyncStatus/>
        { props.userToken ?
          undefined : <LoginForm/> }
      </Content>
    </Container>
  );
};

PropTypes.propTypes = {
  userToken: PropTypes.string
};

// container
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    userToken: state.database.user.token
  }
};

export default connect(mapStateToProps)(LoginView);
