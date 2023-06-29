import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContractsList from "../screens/ContractsList";
import ContractDetail from "../screens/ContractDetail";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ContractsList" component={ContractsList} />
      <Stack.Screen name="ContractDetail" component={ContractDetail} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
