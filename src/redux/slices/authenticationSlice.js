import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, authCheckThunk } from "../thunkAPI/authThunk";

const initialState = {
  pending: false,
  adminData: null,
  error: null,
  isAuthenticated: false,
  authChecked: false
};

const authenticationSlice = createSlice({
  name: "loginAuth",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      // Login
      .addCase(loginThunk.pending, (state) => {
        state.pending = true;
      })

      .addCase(loginThunk.fulfilled, (state, action) => {
        state.pending = false;
        state.adminData = action.payload;
        state.isAuthenticated = true;
        state.authChecked = true;
        state.error = null;
      })

      .addCase(loginThunk.rejected, (state, action) => {
        state.pending = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      })

      // Auth Check
      .addCase(authCheckThunk.pending, (state) => {
        state.pending = true;
      })

      .addCase(authCheckThunk.fulfilled, (state, action) => {
        state.pending = false;
        state.isAuthenticated = true;
        state.authChecked=true;
        state.adminData = action.payload.admin;
      })

      .addCase(authCheckThunk.rejected, (state) => {
        state.pending = false;
        state.isAuthenticated = false;
        state.authChecked=true;
        state.adminData = null;
      });
  },
});

export default authenticationSlice.reducer;