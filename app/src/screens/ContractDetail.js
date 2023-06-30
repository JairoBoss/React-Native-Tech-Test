import React, { useState } from "react";
import {
  Linking,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Accordion from "react-native-collapsible/Accordion";

const ContractDetail = ({ navigation, route }) => {
  const { contract, participantes } = route.params;

  const sections = [
    {
      tittle: "Licitación",
      text: contract.releases[0].contracts[0].title,
      publisher: contract.compiledRelease.publisher.name,
      date: contract.compiledRelease.date,
      id: contract.compiledRelease.id,
    },
    {
      tittle: "Ganadores",
    },
    {
      tittle: "Contratos",
    },
    {
      tittle: "Participantes",
    },
  ];
  const [activeSections, setActiveSections] = useState([]);

  const setSections = (sections) => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const accordionHeader = (section) => {
    return (
      <View
        style={{
          paddingBottom: 10,
          marginTop: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "#192639",
              lineHeight: 16 * 1.2,
            }}
          >
            {section.tittle}
          </Text>
        </View>
      </View>
    );
  };

  const accordionContent = (section) => {
    return (
      <View>
        {section.tittle === "Licitación" && (
          <>
            <TextRow value={section.text} />
            <TextRow value={section.publisher} />
            <TextRow value={section.date} />
            <TextRow value={section.id} />
          </>
        )}
        {section.tittle === "Ganadores" &&
          contract.compiledRelease.contracts[0].suppliers.length > 0 && (
            <>
              <TextRow
                value={`Titulo: ${contract.compiledRelease.contracts[0].title}`}
              />

              {contract.compiledRelease.contracts[0].suppliers.map(
                (item, index) => {
                  return <TextRow value={`Nombre: ${item.name}`} />;
                }
              )}
              <TextRow
                value={`Monto: $${contract.compiledRelease.contracts[0].contractDetails.originalCurrencyValue.amount} ${contract.compiledRelease.contracts[0].contractDetails.originalCurrencyValue.currency}`}
              />
              <TextRow
                value={`Vigencia: ${
                  contract.compiledRelease.contracts[0].period.startDate.split(
                    "T"
                  )[0]
                } / ${
                  contract.compiledRelease.contracts[0].period.endDate.split(
                    "T"
                  )[0]
                }`}
              />
            </>
          )}

        {section.tittle === "Contratos" && (
          <>
            {contract.compiledRelease.contracts.map((item, index) => {
              return (
                <>
                  <View
                    style={{
                      paddingBottom: 5,
                      borderBottomWidth: 0.5,
                      borderBottomColor: "black",
                    }}
                  >
                    <TextRow value={`Contrato ${index + 1}`} />
                    <TextRow
                      value={`Nombre: ${
                        item.suppliers[0]?.name || "Sin nombrbe"
                      }`}
                    />
                    <TextRow
                      value={`Monto: $${item.contractDetails.originalCurrencyValue.amount} ${item.contractDetails.originalCurrencyValue.currency}`}
                    />
                    <TextRow
                      value={`Vigencia: ${
                        item.period.startDate.split("T")[0]
                      } - ${item.period.endDate.split("T")[0]}`}
                    />
                  </View>
                </>
              );
            })}
          </>
        )}

        {section.tittle === "Participantes" && participantes.length > 0 && (
          <>
            {participantes.map((item, index) => {
              return (
                <>
                  <View
                    style={{
                      paddingBottom: 5,
                      borderBottomWidth: 0.5,
                      borderBottomColor: "black",
                    }}
                  >
                    <TextRow value={`Participante ${index + 1}`} />
                    <TextRow value={`ID: ${item.id}`} />
                    <TextRow value={`Nombre: ${item?.name || "Sin nombre"}`} />
                  </View>
                </>
              );
            })}
          </>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: "2%",
        paddingVertical: "5%",
      }}
    >
      <Text
        style={{
          paddingLeft: "5%",
          color: "#1a1b1d",
          fontSize: 16,
          fontWeight: "500",
        }}
      >
        {contract.releases[0].contracts[0].title}
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Accordion
          activeSections={activeSections}
          sections={sections}
          touchableComponent={TouchableOpacity}
          renderHeader={accordionHeader}
          renderContent={accordionContent}
          duration={400}
          onChange={setSections}
          sectionContainerStyle={{
            marginBottom: 8,
            borderBottomWidth: 1,
            borderColor: "#EAEDF4",
            marginHorizontal: 20,
          }}
        />
        <View style={{ flex: 1, alignItems: "center", marginTop: 10 }}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                contract.releases[0].contracts[0].implementation.budgetBreakdown[0].url.replace(
                  "http://",
                  "https://"
                )
              )
            }
          >
            <Text> Fuente</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContractDetail;

const styles = StyleSheet.create({
  text: {
    color: "#576C7B",
    fontSize: 14,
    lineHeight: 14 * 1.5,
  },
});

const TextRow = ({ value }) => {
  return <Text style={styles.text}>{value}</Text>;
};
