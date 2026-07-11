import { createSlice } from "@reduxjs/toolkit";
import { getAboutUsThunk } from "../thunkAPI/AboutUsThunk";
const initialState={
    loading:false,
    data:null,
    error:null
}

const AboutUsDataSlice=createSlice({
    name:"AboutData",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getAboutUsThunk.pending,(state)=>{
            state.loading=true
        })
        .addCase(getAboutUsThunk.fulfilled,(state,action)=>{
            state.loading=false
            state.error=null
            state.data=action.payload
        })
        .addCase(getAboutUsThunk.rejected,(state,action)=>{
            state.loading=false
            state.error=action.payload
        })
    }
})
export default AboutUsDataSlice.reducer