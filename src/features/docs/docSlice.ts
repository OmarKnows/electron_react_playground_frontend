import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Doc } from "./docModel";
import docService from "./docServices";

export interface DocState {
  docLoading: boolean;
  docError: boolean;
  docs: Doc[];
}

const initialState: DocState = {
  docs: [],
  docLoading: false,
  docError: false,
};

export const getDocs = createAsyncThunk("/docs", async () => {
  try {
    return await docService.getDocs();
  } catch (error) {
    console.log("Error: ", error);
  }
});

export const docSlice = createSlice({
  name: "doc",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDocs.pending, (state) => {
        state.docLoading = true;
      })
      .addCase(getDocs.fulfilled, (state, action) => {
        state.docLoading = false;
        state.docs = action.payload?.data || [];
      })
      .addCase(getDocs.rejected, (state) => {
        state.docLoading = false;
        state.docError = true;
        state.docs = [];
      });
  },
});

export default docSlice.reducer;
