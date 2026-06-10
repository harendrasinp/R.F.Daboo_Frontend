
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isOpenModal:false
}

const LoginSlice=createSlice({
  name:"Login",
  initialState,
  reducers:{
      openLoginModal:(state)=>{
          state.isOpenModal=true
      },
      closeLoginModal:(state)=>{
        state.isOpenModal=false
      }
  }
})

export const { openLoginModal, closeLoginModal } = LoginSlice.actions;
export default LoginSlice.reducer