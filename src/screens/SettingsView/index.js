import React from 'react';
import {Container, Content} from 'native-base';

import LoginForm from './components/LoginForm';

const LoginView = props => {
  return (
    <Container>
      <Content>
        <LoginForm/>
      </Content>
    </Container>
  );
};

export default LoginView;
