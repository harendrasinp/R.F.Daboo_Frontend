import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "@/redux/slices/Loginslice"
const store=configureStore({
  reducer:{
    login:LoginReducer,

  }
})
export default store