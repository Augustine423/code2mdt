import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; // Added createSlice here
import axios from "axios";

export const fetchFlightLogs = createAsyncThunk(
  "flightlogs/fetchFlightLogs",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://52.79.57.3:3003/flightLog");
      return response.data; // Directly return response.data without extra await
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch flightlogs"
      );
    }
  }
);

const flightlogSlice = createSlice({
  name: "flightlogs",
  initialState: {
    flightlogs: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlightLogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFlightLogs.fulfilled, (state, action) => {
        state.loading = false;
        state.flightlogs = action.payload;
      })
      .addCase(fetchFlightLogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default flightlogSlice.reducer;
