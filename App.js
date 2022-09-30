import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import ChatListScreen from "./screens/ChatListScreen";

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ChatListScreen" component={ChatListScreen} options={{title: 'Chat List'}}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}