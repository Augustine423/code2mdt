import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";  // Added createSlice here
import axios from "axios";

export const fetchVesselSRecord = createAsyncThunk(
  "vesselrecords/fetchVesselSRecord ",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://52.79.57.3:3003/vesselsrecord");
      return response.data;  // Directly return response.data without extra await
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch vesselrecords");
    }
  }
);

// Fetch a single image detail by ID
export const fetchImageById = createAsyncThunk(
  "vesselrecords/fetchImageById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://52.79.57.3:3003/vesselsrecord/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch image");
    }
  }
);

const vesselRecordSlice = createSlice({
  name: "vesselrecords",
  initialState: {
    vesselrecords: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVesselSRecord .pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVesselSRecord .fulfilled, (state, action) => {
        state.loading = false;
        state.vesselrecords = action.payload;
      })
      .addCase(fetchVesselSRecord .rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

            // Fetch Company By ID
            .addCase(fetchImageById.pending, (state) => {
              state.loading = true;
            })
            .addCase(fetchImageById.fulfilled, (state, action) => {
              state.loading = false;
              state.currentImage = action.payload; // Store the fetched company in currentCompany
            })
            .addCase(fetchImageById.rejected, (state, action) => {
              state.loading = false;
              state.error = action.payload || "An error occurred while fetching the image.";
            })
  },
});

export default vesselRecordSlice.reducer;