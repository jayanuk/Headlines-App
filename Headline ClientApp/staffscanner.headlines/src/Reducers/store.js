import { configureStore } from '@reduxjs/toolkit';
import headLineReducer from "./headLineSlice";
import commentReducer from "./commentSlice";
import ratingReducer from "./ratingSlice";

export const store = configureStore({
  reducer: {
    headLine: headLineReducer,
    comment: commentReducer,
    rating: ratingReducer
  },
})