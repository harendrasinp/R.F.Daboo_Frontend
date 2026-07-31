import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {API_URL} from "@/utils/api.js"
// --------------------------------DropDownList Thunks-----------------------------------
export const DrowpDownThunk = createAsyncThunk(
    "dropDown/item",
    async (itemName, thunkAPI) => {
        try {
            const response = await axios.post(`${API_URL}/admin/dropdowItem`, { itemName })
            return response.data

        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data
            )
        }
    }
)
export const GetDrowpDownListThunk = createAsyncThunk(
    "get/dropDownList",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(`${API_URL}/admin/getDropDownList`)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data
            )
        }
    }
)
export const EditDrowpDownThunk = createAsyncThunk(
    "EditeEvent/item",
    async (EditEvent, thunkAPI) => {
        try {
            const response = await axios.post(`${API_URL}/admin/editdropdowItem`, EditEvent )
            return response.data

        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data
            )
        }
    }
)
export const DeleteEventThunk = createAsyncThunk("delete/event",async(eventName,thunkAPI)=>{
    try{
        const response=await axios.post(`${API_URL}/admin/DeleteEvent`,{eventName})
        return response.data
    }catch(error){
        return thunkAPI.rejectWithValue(error.response.data)
    }
}
)
// -----------------------Image Related Thunk-----------------------------------------
export const UploadImageThunk = createAsyncThunk(
    "upload/imageFile",
    async (fileData, thunkAPI) => {
        try {
            const response = await axios.post(`${API_URL}/admin/uploadImage`,
                fileData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            )
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data
            )
        }
    }
)


export const GetImageDataThunk = createAsyncThunk(
    "get/imageData",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(`${API_URL}/admin/getImageData`)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data
            )
        }
    }
)
export const GetUYearThunk = createAsyncThunk(
    "get/year",
    async (Event, thunkAPI) => {
        try {
            const response = await axios.get(`${API_URL}/admin/getYear/${Event}`)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data
            )
        }
    }
)
export const GetUYearImage = createAsyncThunk(
    "get/yearImage",
    async (fetchImageInfo, thunkAPI) => {
        console.log(fetchImageInfo)
        try {
            const response = await axios.post(`${API_URL}/admin/getYearImage`, fetchImageInfo)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data
            )
        }
    }
)
export const getAllImageThunk = createAsyncThunk(
    "get/allImages",
    async (editImageInfo, thunkAPI) => {
        try {
            const response = await axios.post(`${API_URL}/admin/getEditImages`, editImageInfo)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data
            )
        }
    }
)
export const deleteImageThunk = createAsyncThunk(
    "delete/image",
    async (imageId, thunkAPI) => {
        try {
            const response = await axios.delete(`${API_URL}/admin/deleteImage/${imageId}`)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data
            )
        }
    }
)