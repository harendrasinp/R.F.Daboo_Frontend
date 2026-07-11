import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "@/redux/slices/Loginslice"
import authenticationReducer from "@/redux/slices/authenticationSlice"
import AboutUsNewData from "@/redux/slices/AboutUsPostDataSlice"
import AboutUsGetData from "@/redux/slices/aboutUsGetDataSlice" 
import galleryReducer from "@/redux/slices/GallerySlice" 
const store=configureStore({
  reducer:{
    login:LoginReducer,
    auth:authenticationReducer,
    aboutData:AboutUsNewData,
    getAboutData:AboutUsGetData,
    gallery:galleryReducer
  }
})
export default store