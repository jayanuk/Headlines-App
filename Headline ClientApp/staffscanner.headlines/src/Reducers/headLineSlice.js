import { createSlice } from "@reduxjs/toolkit";
import { getHeadlines, syncHeadlines, getHeadlineById } from "../Actions/headLine";

const initialState = {
    data: [],
    loading: false,
    syncResult: null,
    error: null,
    article: {}
};

export const headLineSlice = createSlice({
    name: "headLineSlice",
    initialState,
    reducers: {
        // incrementByAmount: (state, action) => {
        //     state.value += action.payload;
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(getHeadlines.pending, (state) => {
            state.loading = true;
            state.data = [];
            state.error = null;
        });
        builder.addCase(getHeadlines.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        });
        builder.addCase(getHeadlines.rejected, (state, action) => {
            state.loading = false;
            state.data = [];
            state.error = action.error;
        });

        builder.addCase(getHeadlineById.pending, (state) => {
            state.loading = true;
            state.article = {};
            state.error = null;
        });
        builder.addCase(getHeadlineById.fulfilled, (state, action) => {
            state.loading = false;
            state.article = action.payload;
            state.error = null;
        });
        builder.addCase(getHeadlineById.rejected, (state, action) => {
            state.loading = false;
            state.article = {};
            state.error = action.error;
        });

        builder.addCase(syncHeadlines.pending, (state) => {
            state.loading = true;
            state.syncResult = null;
            state.error = null;
        });
        builder.addCase(syncHeadlines.fulfilled, (state, action) => {
            state.loading = false;
            state.syncResult = action.payload;
            state.error = null;
        });
        builder.addCase(syncHeadlines.rejected, (state, action) => {
            state.loading = false;
            state.syncResult = null;
            state.error = action.error;
        });
    },
});

//export const { incrementByAmount } = headLineSlice.actions;

export default headLineSlice.reducer;
