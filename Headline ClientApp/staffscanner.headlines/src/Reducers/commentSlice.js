import { createSlice } from "@reduxjs/toolkit";
import { getComments, addComment } from "../Actions/comment";
import { addVote } from "../Actions/vote";

const initialState = {
    comments: [],
    loading: false,
    error: null,
    saved: null,
};

export const commentSlice = createSlice({
    name: "commentSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getComments.pending, (state) => {
            state.loading = true;
            state.comments = [];
            state.error = null;
        });
        builder.addCase(getComments.fulfilled, (state, action) => {
            state.loading = false;
            state.comments = action.payload;
            state.error = null;
        });
        builder.addCase(getComments.rejected, (state, action) => {
            state.loading = false;
            state.comments = [];
            state.error = action.error;
        });

        builder.addCase(addComment.pending, (state) => {
            state.loading = true;
            state.saved = null;
            state.error = null;
        });
        builder.addCase(addComment.fulfilled, (state, action) => {
            state.loading = false;
            state.saved = action.payload;
            state.error = null;
        });
        builder.addCase(addComment.rejected, (state, action) => {
            state.loading = false;
            state.saved = null;
            state.error = action.error;
        });

        builder.addCase(addVote.pending, (state) => {
            state.error = null;
        });
        builder.addCase(addVote.fulfilled, (state, action) => {
            let commentToUpdate = state.comments.find((c) => c.id === action.payload.commentId);
            commentToUpdate.points = action.payload.points;
            state.error = null;
        });
        builder.addCase(addVote.rejected, (state, action) => {
            state.error = action.error;
        });
    },
});

export default commentSlice.reducer;
