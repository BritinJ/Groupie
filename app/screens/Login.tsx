import {View, Text,StyleSheet,TextInput, ActivityIndicator, Button} from 'react-native'
import React, {useState} from 'react';
import {FIREBASE_AUTH} from '../../FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { createUserWithEmailAndPassword} from 'firebase/auth';
import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading,setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const signIn= async () => {
      setLoading(true);
      try{
        const response = await signInWithEmailAndPassword(auth,email,password);
        console.log(response);
      }catch(error:any){
        console.log(error);
        alert('Sign in failed '+error.message);
      }finally{
        setLoading(false);
      }
    }

    const signUp = async () => {
      setLoading(true);
      try{
        const response = await createUserWithEmailAndPassword(auth, email, password);
        console.log(response);
       }catch(error) 
       {
        console.log(error);
       }finally{
        setLoading(false); 
       }
      

    };

    

    
    return(
        <View style={styles.container}>
            <TextInput value={email} placeholder='Email' autoCapitalize='none' onChangeText={(text)=>setEmail(text)}></TextInput>
            <TextInput secureTextEntry={true} value={password} placeholder='Password' autoCapitalize='none' onChangeText={(text)=>setPassword(text)}></TextInput>
            {loading ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : (
              <>
                <Button title="Login" onPress={signIn}/>
                <Button title="Create account" onPress={signUp}/>
              </>
            )}
        </View>

    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;