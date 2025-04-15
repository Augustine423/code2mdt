import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";  // Added createSlice here
import axios from "axios";

export const fetchMechanicInfo = createAsyncThunk(
  "mechanics/fetchMechanicInfo",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://52.79.57.3:3003/mechanics");
      return response.data;  // Directly return response.data without extra await
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch mechanics");
    }
  }
);
// Fetch a single image detail by ID
export const fetchMechanicInfoById = createAsyncThunk(
  "mechanics/fetchMechanicInfoById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://52.79.57.3:3003/mechanics/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch image");
    }
  }
);

const mechanicSlice = createSlice({
  name: "mechanics",
  initialState: {
    mechanics: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMechanicInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMechanicInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.mechanics = action.payload;
      })
      .addCase(fetchMechanicInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
        // Fetch Company By ID
        .addCase(fetchMechanicInfoById.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchMechanicInfoById.fulfilled, (state, action) => {
          state.loading = false;
          state.currentMechanic= action.payload; // Store the fetched company in currentCompany
        })
        .addCase(fetchMechanicInfoById.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload || "An error occurred while fetching the image.";
        })

  },
});

export default mechanicSlice.reducer;