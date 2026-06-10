import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isOpenSlideMenu:false
}

const SlideMenuSlice=createSlice({
    name:"SlideMenu",
    initialState,
    reducers:{
        OpenSlideMenu:(state)=>{
            state.isOpenSlideMenu=true
        },
        CloseSlideMenu:(state)=>{
            state.isOpenSlideMenu=false
        },
    }
})
export const {OpenSlideMenu,CloseSlideMenu}=SlideMenuSlice.actions
export default SlideMenuSlice.reducer