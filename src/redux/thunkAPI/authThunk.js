import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginThunk=createAsyncThunk(
    "auth/login",
    async(adminData,thunkAPI)=>{
        try{
            const response=await axios.post("http://localhost:4545/admin/Login",adminData,
                {withCredentials: true})
            return response.data
            
        }
        catch(error){
            return thunkAPI.rejectWithValue(
                error.response?.data?.message
            )
        }
    }
)

export const LogoutThunk=createAsyncThunk(
    "auth/logout",
    async(_,thunkAPI)=>{
        try{
            const response=await axios.post("http://localhost:4545/admin/Logout",
                {},
                { withCredentials: true })
                 return response.data; 
        }
        catch(error){
            return thunkAPI.rejectWithValue(
                error.response?.data.message
            )
        }
    }
)