import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { registerRootComponent } from "expo"
import { icon } from './constants';
import Home from './screens/Home';
import StackNavigation from './navigation/StackNavigation';
function App() {
  return (
    <StackNavigation />
  );
}

export default registerRootComponent(App)
