import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";  // Added createSlice here
import axios from "axios";

export const fetchImages = createAsyncThunk(
  "images/fetchImages",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://52.79.57.3:3003/images");
      return response.data;  // Directly return response.data without extra await
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch images");
    }
  }
);

// Fetch a single image detail by ID
export const fetchImageById = createAsyncThunk(
  "images/fetchImageById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://52.79.57.3:3003/images/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch image");
    }
  }
);

const imageSlice = createSlice({
  name: "images",
  initialState: {
    images: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.loading = false;
        state.images = action.payload;
      })
      .addCase(fetchImages.rejected, (state, action) => {
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

export default imageSlice.reducer;