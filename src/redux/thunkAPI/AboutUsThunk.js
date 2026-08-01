import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import CredentialsApi from "@/utils/credentialsApi.js"
import { API_URL } from "@/utils/api";
// -----------------------add New AboutUs Data-----------------------------------------------
export const postAboutUsThunk = createAsyncThunk(
    "aboutUs/newData",
    async (AboutUsData, thunkAPI) => {
        try {
            const response = await CredentialsApi.post("/admin/aboutUsNewData", AboutUsData);

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
            const response = await CredentialsApi.put("/admin/UpdateaboutUsData",
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
            const response = await CredentialsApi.post("/admin/DeleteAboutUsItem", { Id: deletId });

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message
            );
        }
    }
);