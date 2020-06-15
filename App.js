import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

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
},
{
    defaultNavigationOptions: ({navigation}) => 
      ({
        tabBarIcon: () => {
          const routeName = navigation.state.routeName;

          if(routeName === 'Read') {
            return (
              <Image 
                source={require('./assets/booklogo.jpg')}
                style={{width: 40, height: 40}}
              />
            )
          } else if(routeName === 'Write') {
            return(
              <Image 
                source={require('./assets/writing.png')}
                style={{width: 40, height : 40}}
              />
            )
          }
        }
      })
  }
)

const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
