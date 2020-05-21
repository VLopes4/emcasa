import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
const AppStack = createStackNavigator();

import States from './pages/States';
import Countries from './pages/Countries';

export default function Routes(){
    return (

        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Countries" component={Countries} />
                <AppStack.Screen name="States" component={States} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}