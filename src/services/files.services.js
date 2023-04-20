import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAPI } from "./api";

const api = createAPI({
  baseURL: "http://localhost:4000",
});

const getFiles = createAsyncThunk(
  "/files/data",
  async (fileName = "", thunkAPI) => {
    try {
      const url = fileName ? `/files/data?fileName=${fileName}` : "/files/data";
      const response = await api.get(url);
      return response;
    } catch (error) {
      console.error("error", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export { getFiles };
