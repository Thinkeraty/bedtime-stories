import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ReadStory from './screens/ReadSory';
import WriteStory from './screens/WriteStory';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class App extends React.Component {
  render() {
    return(
      <AppContainer/>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Read: {screen: ReadStory},
  Write: {screen: WriteStory}
})

const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
