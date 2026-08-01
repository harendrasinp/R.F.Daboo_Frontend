import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import CredentialsApi from "@/utils/credentialsApi.js"
import { API_URL } from "@/utils/api";


export const ContactUsDataThunk=createAsyncThunk(
    "contacUst/Data",
    async(ContactUstData,thunkAPI)=>{
        try{
            const response=await CredentialsApi.post("/admin/ContactUsData",ContactUstData)
            return response.data
        }catch(error){
            return thunkAPI.rejectWithValue(
                error.response?.data
            )
        }
    }
)
export const ContactsThunk=createAsyncThunk(
    "contacUst/Data",
    async(ContactstData,thunkAPI)=>{
        console.log(ContactstData)
        try{
            const response=await CredentialsApi.post("/admin/ContactData",ContactstData)
            return response.data
        }catch(error){
            return thunkAPI.rejectWithValue(
                error.response?.data
            )
        }
    }
)
export const GetContacUsThunk=createAsyncThunk(
    "GetcontacUst/Data",
    async(_,thunkAPI)=>{
        try{
            const response=await axios.get(`${API_URL}/admin/getContactUs`)
            return response.data
        }catch(error){
            return thunkAPI.rejectWithValue(
                error.response?.data
            )
        }
    }
)
export const GetPhonesNoThunk=createAsyncThunk(
    "GetPhonesNo/Data",
    async(_,thunkAPI)=>{
        try{
            const response=await axios.get(`${API_URL}/admin/getPhones`)
            console.log(response.data)
            return response.data
        }catch(error){
            return thunkAPI.rejectWithValue(
                error.response?.data
            )
        }
    }
)
export const GetAllPhonesNoListThunk=createAsyncThunk(
    "GetAllPhonesList/Data",
    async(_,thunkAPI)=>{
        try{
            const response=await axios.get(`${API_URL}/admin/getAllPhoneNoList`)
            console.log(response.data)
            return response.data
        }catch(error){
            return thunkAPI.rejectWithValue(
                error.response?.data
            )
        }
    }
)
export const DeleteContactFromListThunk=createAsyncThunk(
    "DeletePhoneFromPhonesList/Data",
    async(phoneId,thunkAPI)=>{
        try{
            const response=await CredentialsApi.post("/admin/DeletePhoneFromList", {phoneId:phoneId})
            console.log(response.data)
            return response.data
        }catch(error){
            return thunkAPI.rejectWithValue(
                error.response?.data
            )
        }
    }
)
export const UpdatePhoneNoList=createAsyncThunk(
    "UpdatePhoneList/Data",
    async(UpdatePhoneNo,thunkAPI)=>{
        console.log(UpdatePhoneNo)
        try{
            const response=await CredentialsApi.post("/admin/UpdatePhoneList", UpdatePhoneNo)
            return response.data
        }catch(error){
            return thunkAPI.rejectWithValue(
                error.response?.data
            )
        }
    }
)