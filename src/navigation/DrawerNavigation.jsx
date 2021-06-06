import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import DrawerPage from './DrawerPage';

const Drawer = createDrawerNavigator();
export default function DrawerNavigation() {
    return (

        <Drawer.Navigator drawerContent={props => <DrawerPage {...props} />} >
                <Drawer.Screen name="Home" component={Home} />
            </Drawer.Navigator>
     
    )
}
