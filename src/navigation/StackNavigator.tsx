import React from 'react';
import {favoriler} from '../views/favorites';
import {MovieSearch} from '../views/Movie';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export const StackNavigator=()=>{
    return (
        <Stack.Navigator>
            <Stack.Screen name='MovieSearch' component={MovieSearch} options={{ headerShown: false }} />
            <Stack.Screen name='favoriler' component={favoriler} />
        </Stack.Navigator>
    )
}

export default StackNavigator;