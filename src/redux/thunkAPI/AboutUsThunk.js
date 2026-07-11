import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// -----------------------add New AboutUs Data-----------------------------------------------
export const postAboutUsThunk = createAsyncThunk(
    "aboutUs/newData",
    async (AboutUsData, thunkAPI) => {
        try {
            const response = await axios.post("http://localhost:4545/admin/aboutUsNewData",
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
                "http://localhost:4545/admin/getAboutUsData"
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
            const response = await axios.put("http://localhost:4545/admin/UpdateaboutUsData",
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
                "http://localhost:4545/admin/DeleteAboutUsItem",
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