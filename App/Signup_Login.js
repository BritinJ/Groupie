import {TouchableOpacity, StyleSheet, Text, Image, SafeAreaView, View, TextInput, ImageBackground } from 'react-native';
import React, {useState, useEffect} from 'react';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/*  Import necessary components and libraries from their respective modules. found under node_modules */


/* Define the main functional component for the applicaiton. this is like the 'main' function */
function Signup_Login({navigation}) {
 /* //creates the fonts
  const [fontsLoaded, setFontsLoaded] = useState(false);

  //This is fthe 'FontLoader Async' that took me forever to figure out. documentation should be clearer :/
  useEffect (()=> {
    async function loadFonts(){
      await Font.loadAsync({
        //This is where custom fonts will go
        ArimoRegular: require('../assets/fonts/Arimo-Regular.ttf')
      });
      //console.log('custom font loaded:', Font.isLoaded('ArimoRegular'));
      setFontsLoaded(true);
    }
    loadFonts();
  },[]);

  */


  return (
     <View style={styles.container} /* creates a container to hold stuff. like anything  */ >   
      <ImageBackground source={require('../assets/background.png')}   style = {styles.bckgrnd} /* displays the background image */ >  
      <Image source={require('../assets/Groupie_Logo.png')} style = {styles.groupie} /* displays the logo*//>

      <View style = {styles.Buttoncontainer}   /* the below is the container for buttons and theirselves */>
        <View style={styles.Inputrow}>
          <TouchableOpacity
           style={styles.button}
           onPress={() => navigation.navigate('Login')}
           >
            <Text>Login</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.Inputrow}>
        <TouchableOpacity
         style={styles.button}
         onPress={() => navigation.navigate('Signup_Screen')}
         >
          <Text>Signup</Text>
        </TouchableOpacity>
      </View>
     </View>
    </ImageBackground>
  </View>
  );
}

export default Signup_Login;

//below is where all the styles are defined for the app components
const styles = StyleSheet.create({
  //this is a styler for the main container
  container: {
    flex: 1,
    backgroundColor: '#7b9c98',
    alignItems: 'center',
    justifyContent: 'center',
  },
  //the below affects the background image
  bckgrnd:{
    flex: 1,
    alignSelf: 'stretch',
    width: 'auto',
    justifyContent: 'center'
  },
  //below is the styling for the "Groupie" logo
  groupie:{
    flex: 1,
    alignSelf: 'stretch',
    width: 'auto',
    justifyContent: 'center',
    objectFit: 'contain',
    marginTop: 70
  },
  Buttoncontainer:{
    //this is the CSS for all the buttons
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:330, 
  },
  button:{
    //button css
    height: 40,
    backgroundColor: 'gray',
    width: 120,
    paddingLeft: 2,
    borderRadius: 50,
    justifyContent: 'center', // Center horizontally
    alignItems: 'center',     //center Vertically
  },
  Inputrow:{
    //this is what lets the buttons be in a row
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15
  },
  
});
