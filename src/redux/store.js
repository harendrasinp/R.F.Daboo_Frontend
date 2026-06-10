import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "@/redux/slices/Loginslice"
import SlideMeniReducer from "@/redux/slices/MobileSlidemenuSlice"
const store=configureStore({
  reducer:{
    login:LoginReducer,
    SlideMenu:SlideMeniReducer
  }
})
export default store