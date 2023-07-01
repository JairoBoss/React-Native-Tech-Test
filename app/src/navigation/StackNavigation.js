import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContractsList from "../screens/ContractsList";
import ContractDetail from "../screens/ContractDetail";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ContractsList"
        component={ContractsList}
        options={({ navigation }) => ({
          header: () => <Header navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="ContractDetail"
        component={ContractDetail}
        options={({ navigation }) => ({
          header: () => <Header navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
