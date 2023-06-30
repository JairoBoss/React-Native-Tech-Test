import React, { useEffect } from "react";
import {
  Button,
  View,
  Text,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getPaginatedContracts } from "../services/ContractService";
import ContractCard from "../components/ContractCard";

const ContractsList = ({ navigation }) => {
  const dispatch = useDispatch();

  const { contracts, loading } = useSelector((state) => state.contract);

  useEffect(() => {
    dispatch(getPaginatedContracts({ page: 3, pageSize: 50 }));
  }, []);

  return (
    <>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FlatList
              data={contracts}
              keyExtractor={(item) => item._id.toString()}
              renderItem={({ item }) => (
                <ContractCard contract={item} navigation={navigation} />
              )}
            />
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

export default ContractsList;
