import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "../thunkAPI/authThunk";
const initialState={
    pending:false,
    adminData:null,
    error:null
}

const authenticationSlice=createSlice({
    name:"loginAuth",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.pending = true
      })

      .addCase(loginThunk.fulfilled,(state,action)=>{
        state.pending=false,
        state.adminData=action.payload

        state.error=null
      })
      .addCase(loginThunk.rejected,(state,action)=>{
        state.pending=false,
        state.error=action.payload
      })
   
  }
})

export default authenticationSlice.reducer