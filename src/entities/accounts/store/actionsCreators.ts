import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserData } from "entities/accounts";


export const fetchUserDataAction = createAsyncThunk(
    'accounts/fetchUserData',
    async (_, { rejectWithValue }) => {
        try {
            return (await fetchUserData()).data;
        } catch (e) {
            return rejectWithValue(e);
        }
    },
)