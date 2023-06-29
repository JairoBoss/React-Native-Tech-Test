import httpClient from "./httpClient";
import { createAsyncThunk } from "@reduxjs/toolkit";

const prefix = "Records";

export const getPaginatedContracts = createAsyncThunk(
  "getPaginatedContracts",
  async ({ page = 1, pageSize = 10 }) => {
    return (await httpClient.get(`${prefix}?page=${page}&pageSize=${pageSize}`))
      .data;
  }
);
