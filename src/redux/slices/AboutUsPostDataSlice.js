import { createSlice } from "@reduxjs/toolkit";
import { postAboutUsThunk } from "../thunkAPI/AboutUsThunk";
const initialState={
    data:null,
    loading:false,
    PostError:null,
    message:null
}

const AboutSlice=createSlice({
    name:"AboutUs",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(postAboutUsThunk.fulfilled,(state,action)=>{
            state.loading=false;
            state.data=action.payload;
            state.PostError=null;
        })
        .addCase(postAboutUsThunk.pending,(state)=>{
            state.loading=true
        })
        .addCase(postAboutUsThunk.rejected,(state,action)=>{
            state.loading=false;
            state.PostError=action.payload;
        })
    }
})
// export const {cleareError}=AboutSlice.actions
export default AboutSlice.reducer