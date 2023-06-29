import React from "react";
import { Button, View, Text } from "react-native";

const ContractsList = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Contract list Screen</Text>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate("ContractDetail")}
      />
    </View>
  );
};

export default ContractsList;
