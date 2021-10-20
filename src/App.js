import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './StackNavigation';
import FavoriteProvider from './context/FavoriteProvider/FavoriteProvider';
import FavoriteJobs from './pages/FavoriteJobs/FavoriteJobs';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <FavoriteProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Jobs"       screenOptions={{
          drawerActiveTintColor: '#f44336',
          drawerInactiveTintColor: 'black',
        }}>
          <Drawer.Screen name="Jobs" component={StackNavigation} options={{headerShown: false, title: 'Jobs'}}/>
          <Drawer.Screen name="Favorited Jobs" component={FavoriteJobs}  options={{title: 'Favorited Jobs', headerTintColor: '#f44336'}}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </FavoriteProvider>
  );
}