import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import RegistrationForm from './registrationForm/registration-form';
import LoginForm from './loginForm/login-form';


const Stack = createStackNavigator();

const AuthView = () => {
    return( 
      <Stack.Navigator screenOptions={{headerShown: false} }>
          <Stack.Screen
            name="Register"
            component={RegistrationForm}
          />
          <Stack.Screen 
            name="Log In"
            component={LoginForm}
            />
      </Stack.Navigator>);
}

export default AuthView;
    