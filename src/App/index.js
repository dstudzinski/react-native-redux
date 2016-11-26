import React, {Component} from 'react';
import {
  StyleSheet,
  NavigationExperimental,
  Text,
  StatusBar,
  View
} from 'react-native';
import Drawer from 'react-native-drawer';

import {Container, Header, Title, Content, Button, Icon} from 'native-base';


import routes from '../routes';
import Sidebar from '../components/Sidebar';

import NewProcedureView from '../screens/NewProcedureView';

const {
  Transitioner: NavigationTransitioner,
  Card: NavigationCard,
  Header: NavigationHeader
} = NavigationExperimental;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
// function createReducer(initialState) {
//   return (currentState = initialState, action) => {
//     const {type, key} = action;
//     switch (type) {
//       case 'push':
//         return NavigationStateUtils.push(currentState, {key});
//       case 'pop':
//         return currentState.index > 0 ?
//           NavigationStateUtils.pop(currentState) :
//           currentState;
//       default:
//         return currentState;
//     }
//   }
// }
// const NavReducer = createReducer({
//   index: 0,
//   key: 'App',
//   routes: [{key: 'newProcedureView'}]
// });

export class App extends Component {

  backAction() {

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
              backgroundColor="blue"
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
              <Header>
                <Button transparent onPress={() => {
                  this.drawer.open()
                }}>
                  <Icon name='md-menu'/>
                </Button>
                <Title>{props.scene.route.title}</Title>
              </Header>
            </View>
          </Drawer>
        )}
      />
    )
  }

  renderScene({scene}) {
    const {route} = scene;

    const cmp = routes[route.key].component; // TODO: how to pass props to class components (for func it will by just prop)
    return React.createElement(cmp);
  }
}

// Container
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    navigationState: state.navigationState
  }
};

export default connect(mapStateToProps)(App);
