import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../configs/axiosConfig";

const INITIAL_STATE = { status: "initial", entities: [], currentPage: 1 }; // state enum : 'initial', idle', 'loading', 'succeeded', 'failed'
// const JSONPLACEHOLDER_POST_URL = `https://jsonplaceholder.typicode.com/albums/1/photos`;

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (page = 1) => {
    const response = await apiClient.get(
      `https://jsonplaceholder.typicode.com/albums/${page}/photos`
    );
    console.log(response.data);
    return response.data;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: INITIAL_STATE,
  reducers: {
    loadPosts(state, action) {
      state.entities.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.entities = [...state.entities, ...action.payload];
        state.status = "idle";
      });
  },
});

export default postsSlice.reducer;
