import Home from "./App/Home";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <stack.Navigator>
        <Stack.Screen
        name="Home"
        component={Home}
        options={{title: Home}}
        />
      </stack.Navigator>
    </NavigationContainer>
  )
}
