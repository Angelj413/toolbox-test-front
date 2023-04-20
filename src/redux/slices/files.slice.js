import { createSlice } from "@reduxjs/toolkit";
import { getFiles } from "../../services/files.services";

const initialState = {
  files: {
    data: [],
    pending: false,
    error: false,
  },
};

const filesSlice = createSlice({
  name: "files",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFiles.pending, (state) => {
        state.files.pending = true;
        state.files.error = false;
      })
      .addCase(getFiles.fulfilled, (state, { payload }) => {
        state.files.pending = false;
        state.files.error = false;
        state.files.data = payload.data;
      })
      .addCase(getFiles.rejected, (state) => {
        state.files.pending = false;
        state.files.error = true;
      });
  },
});

export default filesSlice.reducer;
