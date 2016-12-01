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
        { props.loginState === USER_LOGGED_IN ?
          undefined : <LoginForm/> }
      </Content>
    </Container>
  );
};

PropTypes.propTypes = {
  loginState: PropTypes.string
};

// container
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    loginState: state.database.loginState
  }
};

export default connect(mapStateToProps)(LoginView);
