import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import{API_URL} from "@/utils/api.js"
export const loginThunk=createAsyncThunk(
    "auth/login",
    async(adminData,thunkAPI)=>{
        try{
            const response=await axios.post(`${API_URL}/admin/Login`,adminData,
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
            const response=await axios.post(`${API_URL}/admin/Logout`,
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