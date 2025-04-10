import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";  // Added createSlice here
import axios from "axios";

export const fetchPilotInfos = createAsyncThunk(
  "pilots/fetchPilotInfos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://52.79.57.3:3003/pilotInfo");
      return response.data;  // Directly return response.data without extra await
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch pilotsS");
    }
  }
);

const pilotSlice = createSlice({
  name: "pilots",
  initialState: {
    pilots: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPilotInfos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPilotInfos.fulfilled, (state, action) => {
        state.loading = false;
        state.pilots = action.payload;
      })
      .addCase(fetchPilotInfos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default pilotSlice.reducer;