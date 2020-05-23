import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
const AppStack = createStackNavigator();

import Home from './pages/Home';
import States from './pages/States';
import Countries from './pages/Countries';
import Recommendations from './pages/Recommendations';

export default function Routes(){
    return (

        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Countries" component={Countries} />
                <AppStack.Screen name="States" component={States} />
                <AppStack.Screen name="Recommendations" component={Recommendations} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}