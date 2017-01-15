import React, {PropTypes} from 'react';
import {Container, Content} from 'native-base';

import {
  USER_LOGGED_OUT,
  USER_LOGGING_FAILED
} from '../../configs/constants';
import LoginForm from './components/LoginForm';
import LogoutForm from './components/LogoutForm';
import SyncStatus from './components/SyncStatus';

const LoginView = props => {
  const {loginState} = props;

  return (
    <Container>
      <Content>
        <SyncStatus/>
        {loginState === USER_LOGGED_OUT || loginState === USER_LOGGING_FAILED ? <LoginForm/> : <LogoutForm/>}
      </Content>
    </Container>
  );
};

LoginView.propTypes = {
  loginState: PropTypes.string
};

// container
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    loginState: state.user.loginState
  }
};

export default connect(mapStateToProps)(LoginView);
