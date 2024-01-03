import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../Services/headlinesApi";


export const getHeadlines = createAsyncThunk("headline/getHeadlines", api.getHeadlines);

export const getHeadlineById = createAsyncThunk("headline/getHeadlineById", (id) => api.getHeadlineById(id));

export const syncHeadlines = createAsyncThunk("headline/syncHeadLines", api.syncHeadlines);