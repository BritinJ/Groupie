import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import SettingsT from './SettingsT';
import User_profile from './User_profile';
import Finder from './Finder';



const Tab = createBottomTabNavigator();

function ALMainContainer() {
  return (
          <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
      <Tab.Screen
      name="Settings"
      component={SettingsT}
      options={{ 
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="settings" size={size} color={color} />
        ),
      }}
    />
      <Tab.Screen
        name="Finder"
        component={Finder}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
        />
      <Tab.Screen
        name="Profile"
        component={User_profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ALMainContainer;
