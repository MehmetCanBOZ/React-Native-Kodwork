
import * as React from 'react';
import { View, Text, Button} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Jobs from './pages/Jobs/Jobs';
import Details from './pages/Details/Details';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
      <Stack.Navigator initialRouteName='Jobs'>
        <Stack.Screen name="Jobs" component={Jobs} options={{
          title: 'Jobs',
          headerTitleAlign: 'center',
          headerTintColor: '#f44336',
        }}/>
        <Stack.Screen name="Detail" component={Details}  options={({route}) => ({
          title: route?.params?.name
            ? route?.params?.name
            : 'Detail',
          headerTitleAlign: 'center',
          headerTintColor: '#f44336',
        })}/>
      </Stack.Navigator>
  );
}

export default StackNavigation;