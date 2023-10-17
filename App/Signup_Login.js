import {TouchableOpacity, StyleSheet, Text, Image, SafeAreaView, View, TextInput, ImageBackground } from 'react-native';
import React, {useState, useEffect} from 'react';
import * as Font from 'expo-font';
/*  Import necessary components and libraries from their respective modules. found under node_modules */


/* Define the main functional component for the applicaiton. this is like the 'main' function */
export default function App() {
  //creates the fonts
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


  return (
     <View style={styles.container} /* creates a container to hold stuff. like anything  */ >   
      <ImageBackground source={require('../assets/background.png')}   style = {styles.bckgrnd} /* displays the background image */ >  
      <Text style = {[styles.groupie]} /* displays the text  "Groupie" */
      >Groupie </Text> 
      

      <View style = {styles.Buttoncontainer}   /* the below is the container for buttons and theirselves */>
        <View style={styles.Inputrow}>
          <TouchableOpacity style={styles.button}>
            <Text>Login</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.Inputrow}>
        <TouchableOpacity style={styles.button}>
          <Text>Signup</Text>
        </TouchableOpacity>
      </View>
     </View>
    </ImageBackground>
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
    justifyContent: 'center'
  },
  //below is the styling for the "Groupie" text
  groupie:{
    flex: 1,
    height: 700,
    flexShrink: 0,
    color: 'white',
    fontSize: 70,
    fontWeight: '700',
    fontStyle: 'normal',
    alignSelf: 'center',
    width: 'auto',
    position: 'absolute'
  },
  Buttoncontainer:{
    //this is the CSS for all the items text input boxes and their labels
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:190, 
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
