import { createSlice } from "@reduxjs/toolkit";
import { getRatings, addRating } from "../Actions/rating";

const initialState = {
    ratings: [],
    loading: false,
    error: null,
    saved: null
};

export const ratingSlice = createSlice({
    name: "ratingSlice",
    initialState,
    reducers: {
      
    },
    extraReducers: (builder) => {
        builder.addCase(getRatings.pending, (state) => {
            state.loading = true;
            state.ratings = [];
            state.error = null;
        });
        builder.addCase(getRatings.fulfilled, (state, action) => {
            state.loading = false;
            state.ratings = action.payload;
            state.error = null;
        });
        builder.addCase(getRatings.rejected, (state, action) => {
            state.loading = false;
            state.ratings = [];
            state.error = action.error;
        });       

        builder.addCase(addRating.pending, (state) => {
            state.loading = true;
            state.saved = null;
            state.error = null;
        });
        builder.addCase(addRating.fulfilled, (state, action) => {
            state.loading = false;
            state.saved = action.payload;
            state.error = null;
        });
        builder.addCase(addRating.rejected, (state, action) => {
            state.loading = false;
            state.saved = null;
            state.error = action.error;
        });
    },
});

export default ratingSlice.reducer;
