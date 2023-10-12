import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image,Button, SafeAreaView, View } from 'react-native';
import React from 'react';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';

export default function App() {

  return (
    <View style={styles.container}>
      <Image source={require('../assets/background.png')}   style = {styles.bckgrnd} />
     {/*  <Button
      title="Navigate to next screen"
      onPress={() => }
      >  */}
      <Text style = {styles.logo} >Groupie</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bckgrnd:{
    flex: 1,
    alignSelf: 'stretch',
    width: 'auto',
  },
  logo:{
    height: 300,
    flex: 1,
    color: 'gray',
    fontSize: 80,
    fontWeight: 700,
    fontFamily: 'Arimo-Bold',

    alignSelf: 'center',
    width: 'auto',
    position: 'absolute'
  },

  
});
