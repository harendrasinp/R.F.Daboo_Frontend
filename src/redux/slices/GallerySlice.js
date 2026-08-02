import { createSlice } from "@reduxjs/toolkit";
import { UploadImageThunk, DrowpDownThunk, GetDrowpDownListThunk, GetEventTitleThunk, GetUYearThunk, GetUYearImage, getAllImageThunk, deleteImageThunk, EditDrowpDownThunk, GetImageDataForTitleOfGallery } from "../thunkAPI/GalleryThunk";
const initialState = {
    loading: false,
    statusMessage: null,
    errorMessage: null,
    reponseData: null,
    DropDownListItem: null,
    // -----------Image Data states-------------
    gallery: {
        EventTitleData:[],
        EventName: [],
        EventYear: [],
        EventImage: [],
        EventAllImage: [],
        EventEditer:[]
    }
}

const gallerySliec = createSlice({
    name: "gallery",
    initialState,
    reducers: {
        statusMessageFunction(state) {
            state.statusMessage = null
        },
        yearRemover(state) {
            state.gallery.EventYear = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(UploadImageThunk.pending, (state) => {
                state.errorMessage = null
                state.statusMessage = null,
                    state.loading = true
            })
            .addCase(UploadImageThunk.fulfilled, (state, action) => {
                state.loading = false
                state.errorMessage = null
                state.statusMessage = action.payload
            })
            .addCase(UploadImageThunk.rejected, (state, action) => {
                state.loading = false
                state.statusMessage = null,
                    state.errorMessage = action.payload
            })
            // --------------------DropDownlThunk------------------------------------
            .addCase(DrowpDownThunk.pending, (state) => {
                state.errorMessage = null
                state.statusMessage = null,
                    state.loading = true
            })
            .addCase(DrowpDownThunk.fulfilled, (state, action) => {
                state.loading = false
                state.errorMessage = null
            })
            .addCase(DrowpDownThunk.rejected, (state, action) => {
                state.loading = false
                state.statusMessage = null,
                    state.errorMessage = action.payload
            })
            // --------------------GetDrowpDownListThunk------------------------------------
            .addCase(GetDrowpDownListThunk.pending, (state) => {
                state.errorMessage = null
                state.statusMessage = null,
                    state.loading = true
            })
            .addCase(GetDrowpDownListThunk.fulfilled, (state, action) => {
                state.loading = false
                state.errorMessage = null
                state.DropDownListItem = action.payload.data
            })
            .addCase(GetDrowpDownListThunk.rejected, (state, action) => {
                state.loading = false
                state.statusMessage = null,
                    state.errorMessage = action.payload
            })
            // --------------------GetImageDataThunk------------------------------------
            .addCase(GetImageDataForTitleOfGallery.pending, (state) => {
                state.loading = true
            })
            .addCase(GetImageDataForTitleOfGallery.fulfilled, (state, action) => {
                state.loading = false
                state.errorMessage = null
                state.gallery.EventTitleData = action.payload
            })
            .addCase(GetImageDataForTitleOfGallery.rejected, (state, action) => {
                state.loading = false
                state.errorMessage = action.payload
            })
            // --------------------GetUYearThunk------------------------------------
            .addCase(GetUYearThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(GetUYearThunk.fulfilled, (state, action) => {
                state.loading = false
                state.errorMessage = null
                state.gallery.EventYear = action.payload
            })
            .addCase(GetUYearThunk.rejected, (state, action) => {
                state.loading = false
                state.errorMessage = action.payload
            })
            // --------------------GetUYearImage------------------------------------
            .addCase(GetUYearImage.pending, (state) => {
                state.loading = true
            })
            .addCase(GetUYearImage.fulfilled, (state, action) => {
                state.loading = false
                state.errorMessage = null
                state.gallery.EventImage = action.payload
            })
            .addCase(GetUYearImage.rejected, (state, action) => {
                state.loading = false
                state.errorMessage = action.payload
            })
            // --------------------GetAllImageThunk------------------------------------
            .addCase(getAllImageThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(getAllImageThunk.fulfilled, (state, action) => {
                state.loading = false
                state.errorMessage = null
                state.gallery.EventAllImage = action.payload
            })
            .addCase(getAllImageThunk.rejected, (state, action) => {
                state.loading = false
                state.errorMessage = action.payload
            })
            // ---------------------------Delete thunk-----------------------------------
            .addCase(deleteImageThunk.pending,(state)=>{
                state.loading=true
            })
            // ---------------------------EditEventNameThunk-----------------------------
            .addCase(EditDrowpDownThunk.fulfilled,(state,action)=>{
                state.DropDownListItem=action.payload.data
            })
    }
})
export const { statusMessageFunction, yearRemover } = gallerySliec.actions
export default gallerySliec.reducer