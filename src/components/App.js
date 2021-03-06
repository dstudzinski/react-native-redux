import React, {Component} from 'react';
import {
  StyleSheet,
  NavigationExperimental,
  Text,
  StatusBar,
  View
} from 'react-native';
import Drawer from 'react-native-drawer';

import routes from '../configs/routes';
import Sidebar from './Sidebar';
import Header from './Header';
import {USER_LOGGED_IN} from '../configs/constants';

const {
  Transitioner: NavigationTransitioner,
  Card: NavigationCard
} = NavigationExperimental;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {username, password, loginState, setSync} = this.props;
    if(loginState === USER_LOGGED_IN && username && password) {
      setTimeout(() => {
        setSync();
      }, 0); // I know what it does but I don't know why it's needed here to make 2 way sync working
    }
  }

  backAction() {
    this.props.popState(); //TODO: pass valid value
  }

  render() {
    let {navigationState} = this.props;
    const backAction = this.backAction;

    return (
      <NavigationTransitioner
        navigationState={navigationState}
        render={props => (
          <Drawer
            ref={c => this.drawer = c}
            type="overlay"
            content={<Sidebar/>}
            tapToClose={true}
            open={false}
            openDrawerOffset={0.2}
            panCloseMask={0.2}
            closedDrawerOffset={-3}
            styles={{
              drawer: {shadowColor: '#ff0000', shadowOpacity: 0.8, shadowRadius: 3, backgroundColor: '#ffffff'},
              main: {paddingLeft: 3}
            }}
            tweenHandler={(ratio) => ({
              main: {opacity: (2 - ratio) / 2}
            })}>
            <StatusBar
              backgroundColor="#5067FF"
              barStyle="light-content"
            />
            <View style={styles.container}>
              <NavigationCard
                {...props}
                onNavigateBack={backAction}
                renderScene={this.renderScene}
                key={props.scene.route.key}
                style={{marginTop: 56}}
              />
              <Header scene={props.scene} drawer={this.drawer}/>
            </View>
          </Drawer>
        )}
      />
    )
  }

  renderScene({scene}) {
    const {route} = scene;

    const cmp = routes[route.key].component;
    return React.createElement(cmp);
  }
}

// Container
import {connect} from 'react-redux';

import {popState} from '../redux/data/navigationState/actions';
import {setSync} from '../services/database';

const mapStateToProps = state => {
  return {
    navigationState: state.navigationState,
    username: state.user.username,
    password: state.user.password,
    loginState: state.user.loginState
  }
};

export default connect(mapStateToProps,{popState, setSync})(App);
