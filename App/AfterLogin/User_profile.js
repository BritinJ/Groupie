import {TouchableOpacity, StyleSheet, Text, Image, SafeAreaView, View, TextInput, ImageBackground } from 'react-native';
import React, {useState, useEffect} from 'react';
/*  Import necessary components and libraries from their respective modules. found under node_modules */


/* Define the main functional component for the applicaiton. this is like the 'main' function */
function User_profile({navigation}) {


  return (
     <View style={styles.container} /* creates a container to hold stuff. like anything  */ >   
     <Text>User_profile</Text>
  </View>
  );
}

export default User_profile;

//below is where all the styles are defined for the app components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7b9c98',
    alignItems: 'center',
    justifyContent: 'center',
  }
  
  
});
