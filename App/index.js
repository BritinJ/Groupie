import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, SafeAreaView, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup_Login from './Signup_Login';
import Signup_Screen from './Signup_Screen';
import Login from './Login';
import MainContainer from './AfterLogin/MainContainer';

/*  Import necessary components and libraries from their respective modules. found under node_modules */

function HomeScreen(){
  return(
    <View style={styles.container} /* creates a container to hold stuff. like anything  */ >   
      <Image source={require('../assets/Groupie_Logo.png')}   style = {styles.bckgrnd} /* displays the background image */ />  
      <Text style = {styles.logo} /* displays the text  "Groupie" */>Groupie </Text>  
    </View>
  )
}

const Stack = createNativeStackNavigator();

/* Define the main functional component for the applicaiton. this is like the 'main' function */
function App() {
  return (
    <NavigationContainer>{
      <Stack.Navigator initialRouteName='Signup_Login' 
      
      //removes the names of the screens, used for testing 
      screenOptions={{
        headerShown: false,
      }}
      
    >
        <Stack.Screen name="splash" component={HomeScreen} />
        <Stack.Screen name="Signup_Login" component={Signup_Login} />
        <Stack.Screen name="Signup_Screen" component={Signup_Screen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MainContainer" component={MainContainer} />
      </Stack.Navigator>
}</NavigationContainer>
  );
}

export default App;
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