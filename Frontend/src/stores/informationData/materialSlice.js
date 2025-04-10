import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";  // Import necessary Redux Toolkit functions
import axios from "axios";  // Axios for HTTP requests

// Fetch all materials
export const fetchMaterials = createAsyncThunk(
  "materials/fetchMaterials",  // action name
  async (_, { rejectWithValue }) => {
    try {
      // Make API request to fetch all materials
      const response = await axios.get("http://52.79.57.3:3003/materials");
      return response.data;  // Return the response data from the server
    } catch (error) {
      // In case of an error, return the error message
      return rejectWithValue(error.response?.data || "Failed to fetch materials");
    }
  }
);

// Fetch material by ID
export const fetchMaterialById = createAsyncThunk(
  "materials/fetchMaterialById",
  async (id, { rejectWithValue }) => {
    try {
      // Make API request to fetch material by ID
      const response = await axios.get(`http://52.79.57.3:3003/materials/${id}`);
      
      

      return response.data;  // Return the response data from the server
    } catch (error) {
      // In case of an error, return the error message
      return rejectWithValue(error.response?.data || "Failed to fetch material");
    }
  }
);

// Create the slice for materials
const materialSlice = createSlice({
  name: "materials",
  initialState: {
    materials: [],  
    currentMaterial: null, 
    loading: false,  
    error: null,  
  },
  reducers: {},  
  extraReducers: (builder) => {
    
    builder
      .addCase(fetchMaterials.pending, (state) => {
        state.loading = true;  
      })
      .addCase(fetchMaterials.fulfilled, (state, action) => {
        state.loading = false;  
        state.materials = action.payload;  
      })
      .addCase(fetchMaterials.rejected, (state, action) => {
        state.loading = false;  
        state.error = action.error.message; 
      })
      
      // Handle the fetch material by ID async actions
      .addCase(fetchMaterialById.pending, (state) => {
        state.loading = true;  
      })
      .addCase(fetchMaterialById.fulfilled, (state, action) => {
        state.loading = false;  
        state.currentMaterial = action.payload;  
      })
      .addCase(fetchMaterialById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch company";
        state.currentMaterial = null;  // In case of error, set currentMaterial to null
      });
      
      
  },
});

export default materialSlice.reducer;
