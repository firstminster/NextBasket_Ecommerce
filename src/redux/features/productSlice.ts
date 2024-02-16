import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../../utils/requestMethod";
import { AsyncThunkAction, AsyncThunkConfig } from "@reduxjs/toolkit/dist/createAsyncThunk";

export const initialState = {
    products: [],
    isLoading: false,
    isSuccess: false,
    message: "",
    error: null,
};


//  Handle GET request for all products
export const getAllproducts = createAsyncThunk<any, void, AsyncThunkConfig>(
    "product/getAllproducts",
    async (thunkAPI: any) => {
        try {
            const response = await http.get("/products");
            console.log(response);
            return response.data;
        } catch (error: any) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


// Redux Toolkit slice
const productSlice = createSlice({
    name: "product",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllproducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllproducts.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.products = payload;
                state.message = payload.message;
            })
            .addCase(getAllproducts.rejected, (state) => {
                state.isLoading = true;
                state.isSuccess = false;
            });
    },
});

// destructure the slice properties
const { reducer, actions } = productSlice;

// exports action creators
export const { } = actions;
export default reducer;