import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ProductList from '../screens/ProductList';
import LoginPage from '../screens/LoginPage';
import Cart from '../screens/Cart';
import DrawerNavigation from './DrawerNavigation';
import CatagoryPage from '../screens/CatagoryPage';
import ProfilePage from '../screens/ProfilePage';
import SearchPage from '../screens/SearchPage';

const Stack = createStackNavigator();
export default function StackNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={DrawerNavigation} options={{ headerShown: false }} />
                <Stack.Screen name="ProductList" component={ProductList} options={{ headerShown: false }} />
                <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
                <Stack.Screen name="CatagoryPage" component={CatagoryPage} options={{ headerShown: false }} />
                <Stack.Screen name="ProfilePage" component={ProfilePage} options={{ headerShown: false }} />
                <Stack.Screen name="SearchPage" component={SearchPage} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
