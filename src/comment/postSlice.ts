import React from "react";
import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


const API_URL:string = "https://jsonplaceholder.typicode.com/posts";
export const getAllPosts :any = createAsyncThunk("posts/getAllPosts", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});


export type initialStateProps={
    isLoading:boolean,
    posts:string|number[],
    error:null|string
}

const initialState :initialStateProps=({
    isLoading:false, 
    posts: [], 
    error: '' 

})

const postSlice = createSlice({
    name: "posts",
    initialState,
     
    
    reducers: {} as any,
    extraReducers: (builder) => {
      builder.addCase(getAllPosts.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(getAllPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      });
      builder.addCase(getAllPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
    },
  });
  export default postSlice.reducer;
  

