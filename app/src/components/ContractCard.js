import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const ContractCard = ({ contract, navigation }) => {
  const contratos = contract.compiledRelease.contracts.length;
  const participantes = contract.compiledRelease.parties.filter((party) =>
    party.roles.includes("supplier")
  );
  const ganadores = contract.compiledRelease.contracts[0].suppliers.length;

  return (
    <TouchableOpacity
      style={{ margin: 15, backgroundColor: "white" }}
      onPress={() =>
        navigation.navigate("ContractDetail", { contract, participantes })
      }
    >
      <Text style={styles.textH1}>
        {contract.releases[0].contracts[0].title}
      </Text>
      <Text style={styles.textH2}>
        {contract.compiledRelease.publisher.name}
      </Text>
      <Text>{contract.compiledRelease.id}</Text>
      <Text>{contract.compiledRelease.date}</Text>
      <View style={styles.container}>
        <TextRow tittle="Contratos" value={contratos} />
        <TextRow tittle="Participantes" value={participantes?.length} />
        <TextRow tittle="Ganadores" value={ganadores} />
      </View>
    </TouchableOpacity>
  );
};

export default ContractCard;

const TextRow = ({ tittle, value }) => {
  return (
    <>
      {value > 0 && (
        <Text style={styles.item}>
          {tittle}: {value}
        </Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start", // if you want to fill rows left to right
  },
  item: {
    width: "33%", // is 50% of container width
    color: "#576C7B",
    fontSize: 13,
  },
  textH1: {
    color: "#1a1b1d",
    fontSize: 16,
    fontWeight: "500",
  },
  textH2: {
    color: "#1a1b1d",
    fontSize: 14,
    fontStyle: "italic",
  },
});
