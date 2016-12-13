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
        <LoginForm/>
      </Content>
    </Container>
  );
};

PropTypes.propTypes = {
  user: PropTypes.string
};

// container
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    user: state.database.user
  }
};

export default connect(mapStateToProps)(LoginView);
