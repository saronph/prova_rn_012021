import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../screens/Dashboard';
import TargetWeight from '../screens/TargetWeight';
import RegisterIMC from '../screens/RegisterIMC';
import RegisterIMCNoId from '../screens/RegisterIMC/RegisterIMCNoId';

const AppStack = createStackNavigator();

// headerStyle: {
//   backgroundColor: '#26c2e4',
//   alignSelf: 'center',
// },

const AppRoutes = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <AppStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerTitle: 'MEU IMC',
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: '#26c2e4',
          },
        }}
      />
      <AppStack.Screen
        name="TargetWeight"
        component={TargetWeight}
        options={{
          headerTitle: 'PESO-ALVO',
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: '#26c2e4',
          },
        }}
      />
      <AppStack.Screen
        name="RegisterIMC"
        component={RegisterIMC}
        options={{
          headerTitle: 'IMC',
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: '#26c2e4',
          },
        }}
      />
      <AppStack.Screen
        name="RegisterIMCNoId"
        component={RegisterIMCNoId}
        options={{
          headerTitle: 'IMC',
          headerTintColor: '#ffffff',
          headerStyle: {
            backgroundColor: '#26c2e4',
          },
        }}
      />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
