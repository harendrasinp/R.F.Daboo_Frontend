import { createSlice } from "@reduxjs/toolkit";
import { ContactUsDataThunk, GetAllPhonesNoListThunk, GetContacUsThunk, GetPhonesNoThunk } from "../thunkAPI/ContactThunk";
import { MdPending } from "react-icons/md";

const initialState={
    loading:false,
    message:null,
    error:false,
    responseData:null,
    phones:{
        phoneNo:[],
        phoneList:[]
    }
}

const contactSlice=createSlice({
    name:"ContactUs",
    initialState,
    reducers:{
        cleareMessage(state){
            state.message=null
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(GetContacUsThunk.pending,(state,action)=>{
            state.loading=true
            state.error=false
        })
        .addCase(GetContacUsThunk.fulfilled,(state,action)=>{
            state.loading=false
            state.responseData=action.payload
            state.error=false
        })
        .addCase(GetContacUsThunk.rejected,(state,action)=>{
            state.loading=false
            state.error=action.payload
        })
        .addCase(ContactUsDataThunk.pending,(state)=>{
            state.loading=true 
            state.error=null
            state.message=null
        })
        .addCase(ContactUsDataThunk.fulfilled,(state,action)=>{
            state.loading=false
            state.error=null
            state.message=action.payload.message
        })
        .addCase(GetPhonesNoThunk.fulfilled,(state,action)=>{
            state.phones.phoneNo=action.payload.data
        })
        .addCase(GetAllPhonesNoListThunk.fulfilled,(state,action)=>{
            state.phones.phoneList=action.payload.data
        })

    }

})
export const {cleareMessage}=contactSlice.actions
export default contactSlice.reducer

