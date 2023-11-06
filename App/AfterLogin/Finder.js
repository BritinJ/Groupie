import {TouchableOpacity, StyleSheet, Text, Image, SafeAreaView, View, TextInput, ImageBackground } from 'react-native';
import React, {useState, useEffect} from 'react';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/*  Import necessary components and libraries from their respective modules. found under node_modules */


/* Define the main functional component for the applicaiton. this is like the 'main' function */
function Finder({navigation}) {


  return (
     <View style={styles.container} /* creates a container to hold stuff. like anything  */ >   
     <Text>finder</Text>
  </View>
  );
}

export default Finder;

//below is where all the styles are defined for the app components
const styles = StyleSheet.create({  container: {
  flex: 1,
  backgroundColor: '#7b9c98',
  alignItems: 'center',
  justifyContent: 'center',
}
});
