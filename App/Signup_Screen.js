import { TouchableOpacity,  StyleSheet, Text, Image, SafeAreaView, View, TextInput, ImageBackground } from 'react-native';
import React, {useState, useEffect} from 'react';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/*  Import necessary components and libraries from their respective modules. found under node_modules */


/* Define the main functional component for the applicaiton. this is like the 'main' function */
function Signup_Screen({navigation}) {
 /* //creates the fonts
  const [fontsLoaded, setFontsLoaded] = useState(false);

  //This is fthe 'FontLoader Async' that took me forever to figure out. documentation should be clearer :/
  useEffect (()=> {
    async function loadFonts(){
      await Font.loadAsync({
        //This is where custom fonts will go
        ArimoRegular: require('../assets/fonts/Arimo-Regular.ttf')
      });
      console.log('custom font loaded:', Font.isLoaded('ArimoRegular'));
      setFontsLoaded(true);
    }
    loadFonts();
  },[]);
  */


  return (
     <View style={styles.container} /* creates a container to hold stuff. like anything  */ >   
      <ImageBackground source={require('../assets/background.png')}   style = {styles.bckgrnd} /* displays the background image */ >  
      <Image source={require('../assets/Signup.png')} style = {styles.signup} /* displays the Signup*//>
      

      <View style = {styles.inputcontainer}   /* the below is all of the props for input and their labels */>
        <View style={styles.Inputrow}>
          <Text style={styles.InputLabel}>First Name:</Text>
          <TextInput style = {styles.Textinput} defaultValue='fn'/>
      </View>
      <View style={styles.Inputrow}>
          <Text style={styles.InputLabel}>Last Name:</Text>
          <TextInput style = {styles.Textinput} defaultValue='ln'/>
      </View>
      <View style={styles.Inputrow}>
          <Text style={styles.InputLabel} /* adding spaces instead of fixing CSS b/c lazy. apps hould only be vertical anyways */>         Email:</Text>
          <TextInput style = {styles.Textinput} defaultValue='em'/>
      </View>
      <View style={styles.Inputrow}>
          <Text style={styles.InputLabel}>Username:</Text>
          <TextInput style = {styles.Textinput} defaultValue='un'/>
      </View>
      <View style={styles.Inputrow}>
          <Text style={styles.InputLabel}> Password:</Text>
          <TextInput style = {styles.Textinput} defaultValue='pw'/>
      </View>
      <TouchableOpacity
         style={styles.button}
         onPress={() => navigation.navigate('Signup_Screen')}
         >
          <Text>Register</Text>
        </TouchableOpacity>
     </View>
    </ImageBackground>
  </View>
  );
}

export default Signup_Screen;

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
  //below is the styling for the "Signup" logo
  signup:{
    flex: 1,
    alignSelf: 'stretch',
    width: 'auto',
    justifyContent: 'center',
    objectFit: 'contain',
  },
  inputcontainer:{
    //this is the CSS for all the items text input boxes and their labels
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:160 
  },
  Textinput:{
    //text input boxes CSS
    height: 40,
    borderColor: 'white',
    backgroundColor: 'white',
    width: 190,
    borderWidth: 1,
    paddingLeft: 2,
    borderRadius: 10,
  },
  Inputrow:{
    //this is what lets the text input and labels be in a row
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4
  },
  InputLabel:{
    //this is the CSS for all of the labels
    color: 'white',
    fontSize: 18,
    marginRight: 10
  },
  button:{
    //register css
    height: 40,
    marginTop: 60,
    backgroundColor: 'gray',
    width: 120,
    paddingLeft: 2,
    borderRadius: 50,
    justifyContent: 'center', // Center horizontally
    alignItems: 'center',     //center Vertically
  },
  
});
