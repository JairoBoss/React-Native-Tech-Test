import { createSlice } from "@reduxjs/toolkit";
import { getPaginatedContracts } from "../../services/ContractService";

const initialState = {
  contracts: [],
  total: 0,
  loading: true,
  error: null,
};

const contractsSlice = createSlice({
  name: "contracts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPaginatedContracts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getPaginatedContracts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log("Ocurrio un error al recuperar los contracts");
      })

      .addCase(getPaginatedContracts.fulfilled, (state, action) => {
        state.loading = false;
        state.contracts = action.payload.results;
        state.total = action.payload.total;
      });
  },
});

export default contractsSlice.reducer;
