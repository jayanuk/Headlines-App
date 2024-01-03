import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../Services/commentsApi";


export const getComments = createAsyncThunk("comment/getComments", (headLineId) => api.getComments(headLineId));

export const addComment = createAsyncThunk("comment/addComment", (comment) => api.addComment(comment));