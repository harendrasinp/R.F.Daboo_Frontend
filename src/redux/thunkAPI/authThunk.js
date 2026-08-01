import { createAsyncThunk } from "@reduxjs/toolkit";
import CredentialsApi from "@/utils/credentialsApi.js"

export const authCheckThunk = createAsyncThunk(
  "auth/check",
  async (_, thunkAPI) => {
    try {
      const response = await CredentialsApi.get("/admin/dashboard");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message
      );
    }
  }
);

export const loginThunk=createAsyncThunk(
    "auth/login",
    async(adminData,thunkAPI)=>{
        try{
            const response=await CredentialsApi.post("/admin/Login",adminData,)
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
            const response=await CredentialsApi.post("/admin/Logout",{},)
                return response.data; 
        }
        catch(error){
            return thunkAPI.rejectWithValue(
                error.response?.data.message
            )
        }
    }
)