import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import{API_URL} from "@/utils/api.js"
// -----------------------add New AboutUs Data-----------------------------------------------
export const postAboutUsThunk = createAsyncThunk(
    "aboutUs/newData",
    async (AboutUsData, thunkAPI) => {
        try {
            const response = await axios.post(`${API_URL}/admin/aboutUsNewData`,
                AboutUsData,
                { withCredentials: true })

            return response.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data.message
            )
        }
    }
)
// -----------------------get AboutUs Data-----------------------------------------------
export const getAboutUsThunk = createAsyncThunk(
    "aboutUs/getData",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(
                `${API_URL}/admin/getAboutUsData`
            );
          

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message
            );
        }
    }
);
// -----------------------Update AboutUs Data-----------------------------------------------
export const UpdateAboutUsDataThunk = createAsyncThunk(
    "aboutUs/EditIteme",
    async (EditData, thunkAPI) => {
        try {
            const response = await axios.put(`${API_URL}/admin/UpdateaboutUsData`,
                {
                    id: EditData.id,
                    data: EditData.data
                }
            )
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message
            );
        }
    }
)
// -----------------------Delete AboutUs Data-----------------------------------------------
export const DeleteAboutUsItemThunk = createAsyncThunk(
    "aboutUs/DeleteIteme",
    async (deletId, thunkAPI) => {
        try {
            const response = await axios.post(
                `${API_URL}/admin/DeleteAboutUsItem`,
                { Id: deletId }
            );


            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message
            );
        }
    }
);