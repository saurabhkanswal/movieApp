import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PopularMovies from './screens/PopularMovies'
import RecentMovies from './screens/RecentMovies'
import Details from './screens/Details'

const PopularMovieStack = createStackNavigator();
function PopularMovieStackScreen() {
  return (
    <PopularMovieStack.Navigator>
      <PopularMovieStack.Screen name="Popular Movies" component={PopularMovies} />
      <PopularMovieStack.Screen name="Details" component={Details} />
    </PopularMovieStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Popular Movies" component={PopularMovieStackScreen} />
        <Tab.Screen name="Latest Movie" component={RecentMovies}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}