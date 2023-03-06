
import React from "react";
import { configureStore,combineReducers } from "@reduxjs/toolkit";
import postReducer from './postSlice'



const reducer = combineReducers({

    post: postReducer
    

    
})

const store = configureStore({
    reducer,
    
})

export default store