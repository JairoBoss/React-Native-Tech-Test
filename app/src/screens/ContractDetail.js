import React from "react";
import { Button, View, Text } from "react-native";

const ContractDetail = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Contract Detail Screen</Text>
      <Button
        title="Go to list"
        onPress={() => navigation.navigate("ContractsList")}
      />
    </View>
  );
};

export default ContractDetail;
