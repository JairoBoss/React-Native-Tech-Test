import React, { useState, useEffect } from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getPaginatedContracts } from "../services/ContractService";

const Pagination = () => {
  const dispatch = useDispatch();
  const { total } = useSelector((state) => state.contract);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    handlePageChange(1);
  }, []);

  const handlePageChange = (page) => {
    dispatch(getPaginatedContracts({ page, pageSize: 10 }));
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    handlePageChange(pageNumber);
  };

  const pages = [];
  for (
    let i = Math.max(currentPage - 2, 1);
    i < Math.min(currentPage + 3, Math.floor(total / 10) + 1);
    i++
  ) {
    pages.push(i);
  }

  const pageButtons = pages.map((page) => (
    <PageButton
      key={page}
      title={page.toString()}
      onPress={() => handlePageClick(page)}
      color={page === currentPage ? "blue" : "grey"}
    />
  ));

  const prevButton = (
    <Button
      title="<"
      onPress={() => handlePageClick(currentPage - 1)}
      disabled={currentPage === 1}
    />
  );

  const nextButton = (
    <Button
      title=">"
      onPress={() => handlePageClick(currentPage + 1)}
      disabled={currentPage * 10 >= total}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {prevButton}
        {pageButtons}
        {nextButton}
      </View>
    </View>
  );
};

const PageButton = ({ title, onPress, color }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.pageButton, { backgroundColor: color }]}
  >
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pageButton: {
    padding: 10,
    margin: 5,
    borderRadius: 4,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Pagination;
