import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";  // Import necessary Redux Toolkit functions
import axios from "axios";  // Axios for HTTP requests

// Fetch all documents
export const fetchDocuments = createAsyncThunk(
  "documents/fetchDocuments",  // action name
  async (_, { rejectWithValue }) => {
    try {
      // Make API request to fetch all documents
      const response = await axios.get("http://localhost:3003/documents");
      return response.data;  // Return the response data from the server
    } catch (error) {
      // In case of an error, return the error message
      return rejectWithValue(error.response?.data || "Failed to fetch documents");
    }
  }
);

// Fetch material by ID
export const fetchDocumentById = createAsyncThunk(
  "documents/fetchDocumentById",
  async (id, { rejectWithValue }) => {
    try {
      // Make API request to fetch material by ID
      const response = await axios.get(`http://localhost:3003/documents/${id}`);
      
      

      return response.data;  // Return the response data from the server
    } catch (error) {
      // In case of an error, return the error message
      return rejectWithValue(error.response?.data || "Failed to fetch Document");
    }
  }
);

// Create the slice for documents
const documentSlice = createSlice({
  name: "documents",
  initialState: {
    documents: [],  
    currentMaterial: null, 
    loading: false,  
    error: null,  
  },
  reducers: {},  
  extraReducers: (builder) => {
    
    builder
      .addCase(fetchDocuments.pending, (state) => {
        state.loading = true;  
      })
      .addCase(fetchDocuments.fulfilled, (state, action) => {
        console.log("Fetched documents:", action.payload);  // ✅ Debug here
        state.loading = false;  
        state.documents = action.payload;  
      })
      .addCase(fetchDocuments.rejected, (state, action) => {
        state.loading = false;  
        state.error = action.error.message; 
      })
      
      // Handle the fetch material by ID async actions
      .addCase(fetchDocumentById.pending, (state) => {
        state.loading = true;  
      })
      .addCase(fetchDocumentById.fulfilled, (state, action) => {
        state.loading = false;  
        state.currentDocument = action.payload;  
      })
      .addCase(fetchDocumentById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch document";
        state.currentDocument = null;  // In case of error, set currentDocument to null
      });
      
      
  },
});

export default documentSlice.reducer;
