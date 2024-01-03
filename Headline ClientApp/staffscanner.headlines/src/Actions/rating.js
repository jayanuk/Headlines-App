import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../Services/ratingsApi";


export const getRatings = createAsyncThunk("ratings/getRatings", (headLineId) => api.getRatings(headLineId));

export const addRating = createAsyncThunk("rating/addRating", (rating) => api.addRating(rating));