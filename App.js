import React from "react";
import { View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./Components/Home";
import { Interaction } from "./Components/Interaction";
import { Helpline } from "./Components/Helpline";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Interaction" component={Interaction} />
        <Stack.Screen name="Helpline" component={Helpline} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
