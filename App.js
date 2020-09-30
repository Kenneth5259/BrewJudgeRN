import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import RegistrationForm from './views/registrationForm/registration-form';
import LoginForm from './views/loginForm/login-form';
import mapView from './views/mapView/mapView';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Register"
          component={RegistrationForm}
        />
        <Stack.Screen 
          name="Log In"
          component={mapView}
        />

      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({

});

export default App;