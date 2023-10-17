import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, SafeAreaView, View } from 'react-native';
import React from 'react';
import * as Font from 'expo-font';
/*  Import necessary components and libraries from their respective modules. found under node_modules */


/* Define the main functional component for the applicaiton. this is like the 'main' function */
export default function App() {

  return (
     <View style={styles.container} /* creates a container to hold stuff. like anything  */ >   
      <Image source={require('../assets/background.png')}   style = {styles.bckgrnd} /* displays the background image */ />  
      <Text style = {styles.logo} /* displays the text  "Groupie" */>Groupie </Text>  
    </View>
  );
}


//below is where all the styles are defined for the app components
const styles = StyleSheet.create({
  //this is a styler for the main container
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  //the below affects the background image
  bckgrnd:{
    flex: 1,
    alignSelf: 'stretch',
    width: 'auto',
  },
  //below is the styling for the "Groupie" text
  logo:{
    height: 300,
    flex: 1,
    color: 'gray',
    fontSize: 80,
    fontWeight: '700',
   // fontFamily: 'Arimo-Bold',

    alignSelf: 'center',
    width: 'auto',
    position: 'absolute'
  },

  
});