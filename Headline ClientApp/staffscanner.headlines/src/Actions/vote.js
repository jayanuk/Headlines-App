import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../Services/voteApi";

export const addVote = createAsyncThunk("vote/addVote", (vote) => api.addVote(vote));