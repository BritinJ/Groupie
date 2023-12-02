import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Login from './app/screens/Login';
import Details from './app/screens/Details';
import List from './app/screens/List';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './firebaseConfig';
import Signup_Login from './app/screens/Signup_Login';
import Signup_Screen from './app/screens/Signup_Screen';
import LoginNew from './app/screens/LoginNew';
import MainContainer from './app/screens/AfterLogin/MainContainer';

const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

function InsideLayout(){
  return(
    <InsideStack.Navigator>
      <InsideStack.Screen name="My todos" component={List}/>
      <InsideStack.Screen name="details" component={Details}/>
    </InsideStack.Navigator>
  )
}


function HomeScreen(){
  return(
    <View style={styles.container} /* creates a container to hold stuff. like anything  */ >   
      <Image source={require('./assets/Groupie_Logo.png')}   style = {styles.bckgrnd} /* displays the background image */ />  
      <Text style = {styles.logo} /* displays the text  "Groupie" */>Groupie </Text>  
    </View>
  )
}


export default function App() {
  const [user, setUser] = useState<User | null>(null);

  // the below is the basic login component
  useEffect( () =>{
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
      
    }
    , [])
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Signup_Login'>
        {user ? (
          <Stack.Screen name='Inside' component={InsideLayout} options={{headerShown: false}} />
        ) : (
          <Stack.Screen name='Signup_Login' component={Signup_Login} options={{headerShown: false}} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
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
