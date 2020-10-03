import React from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import BrewMap from './BrewMap/BrewMap';
import AuthView from './authView/authView';

const Tab = createBottomTabNavigator();

const MainNavigation = () => {

    return(
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={{style: {backgroundColor: 'black', justifyContent: 'center'}, labelStyle:{fontSize: 18}}} >
                <Tab.Screen name="Map" component={BrewMap} />
                <Tab.Screen name="Auth" component={AuthView}/>
            </Tab.Navigator>
        </NavigationContainer>
       
        
    );
}

const styles = StyleSheet.create({
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'black'
    },
    navItem: {
        backgroundColor: 'black',
        justifyContent: 'center',
        height: 75, 
        paddingLeft: '5%',
        paddingRight: '5%'
    },
    navItemText: {
        textAlign: 'center',
        color: 'white'
    }
});
export default MainNavigation;