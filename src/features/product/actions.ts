import { createAsyncThunk } from '@reduxjs/toolkit';
import http from "../../../utils/requestMethod";

//  Handle GET request for all products
export const getAllproducts = createAsyncThunk(
    "product/getAllproducts",
    async () => {
        try {
            const response = await http.get("products?limit=0");
            return response.data.products;
        } catch (error: any) {
            console.log(error);
            // return thunkAPI.rejectWithValue(error.message);
        }
    }
);

//  Handle GET request for a single product
export const getProduct = createAsyncThunk(
    "product/getProduct",
    async (id: string) => {
        try {
            const response = await http.get(`products/${id}`);
            return response.data;
        } catch (error: any) {
            console.log(error);
            // return thunkAPI.rejectWithValue(error.message);
        }
    }
);