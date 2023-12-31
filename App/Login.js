import { TouchableOpacity, StyleSheet, Text, Image, SafeAreaView, View, TextInput, ImageBackground } from 'react-native';
import React, {useState, useEffect} from 'react';
import * as Font from 'expo-font';
/*  Import necessary components and libraries from their respective modules. found under node_modules */


/* Define the main functional component for the applicaiton. this is like the 'main' function */
function Login() {
  //creates the fonts
 /* const [fontsLoaded, setFontsLoaded] = useState(false);

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
      <Image source={require('../assets/Login.png')} style = {styles.login} /* displays the login*//>
      

      <View style = {styles.inputcontainer}   /* the below is all of the props for input, their labels, and the buttons */>
        <View style={styles.Inputrow}>
          <Text style={styles.InputLabel}>Username: </Text>
          <TextInput style = {styles.Textinput} defaultValue='un'/>
      </View>
      <View style={styles.Inputrow}>
          <Text style={styles.InputLabel}> Password: </Text>
          <TextInput style = {styles.Textinput} defaultValue='pw'/>
      </View>
      <View style = {styles.Buttoncontainer}   /* the below is the container for buttons and theirselves */>
        <View style={styles.Inputrow}>
          <TouchableOpacity style={styles.button}>
            <Text>Forgot Username</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.Inputrow}>
        <TouchableOpacity style={styles.button}>
          <Text> Forgot Password</Text>
        </TouchableOpacity>
      </View>
     </View>
     <TouchableOpacity
      style={styles.loginButton}
      
      >
            <Text>Login</Text>
      </TouchableOpacity>
      </View>
    </ImageBackground>
  </View>
  );
}

export default Login;

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
  //below is the styling for the "Login" image
  login:{
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
  Inputrow:{
    //this is what lets the text input and labels be in a row
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4
  },
  InputLabel:{
    //this is the CSS for usernmane and password labels
    color: 'white',
    fontSize: 18,
    marginRight: 10
  },
  Textinput:{
    //text input boxes CSS
    height: 40,
    borderColor: 'white',
    backgroundColor: 'white',
    width: 190,
    borderWidth: 1,
    paddingLeft: 2
  },
  Buttoncontainer:{
        //this is the CSS for the forgot buttons
        marginLeft: 170
  },
  loginButton:{
    //the text not the box
    height: 40,
    backgroundColor: 'gray',
    width: 120,
    marginTop: 40,
    paddingLeft: 2,
    borderRadius: 50,
    justifyContent: 'center', // Center horizontally
    alignItems: 'center',     //center Vertically
  },
});
