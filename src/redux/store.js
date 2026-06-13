import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "@/redux/slices/Loginslice"
import authenticationReducer from "@/redux/slices/authenticationSlice"
const store=configureStore({
  reducer:{
    login:LoginReducer,
    auth:authenticationReducer,
  }
})
export default store