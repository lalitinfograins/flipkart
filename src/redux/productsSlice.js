import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../urls/apiUrl";
import { STATUS } from "../urls/Status";
import axios from "axios";

const initialState = {
    products: [],
     productsStatus: STATUS.IDLE,
     singleProducts: [],
     singleProductsStatus: STATUS.IDLE
};

const productsSlice = createSlice({
    name: ' products',
    initialState,
    reducers: {},
    extraReducers : (builder) => {
        builder.addCase(fetchAsyncProducts.pending, (state, action) => {
            state.productsStatus = STATUS.LOADING;
        })
        .addCase(fetchAsyncProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.productsStatus = STATUS.SUCCEEDED;
        })
        .addCase(fetchAsyncProducts.rejected, (state, action) => {
            state.productsStatus = STATUS.FAILED;
        }).addCase(fetchAsyncProductSingle.pending, (state, action) => {
            state.productSingletStatus = STATUS.LOADING;
        })
        .addCase(fetchAsyncProductSingle.fulfilled, (state, action) => {
            state.productSingle = action.payload;
            state.productSingleStatus = STATUS.SUCCEEDED;
        })
        .addCase(fetchAsyncProductSingle.rejected, (state, action) => {
            state.productSingleStatus = STATUS.FAILED;
        })
    }
});

export const fetchAsyncProducts = createAsyncThunk('products/fetch' , async(limit) => {
    try {
        const res = await axios.get(`${BASE_URL}products?limit=${limit}`);
        return res.data.products;
    } catch (error) {
        throw error; 
    }
});
export const fetchAsyncProductSingle = createAsyncThunk('product-single/fetch' , async(id) => {
    try {
        const res = await axios.get(`${BASE_URL}products/${id}`);
        return res.data;
    } catch (error) {
        throw error; // You can handle errors in your component or catch them in the async action
    }
});

export const getAllproducts = (state) => state.product.products;
export const getAllProductsStatus = (state) => state.product.productsStatus;
export const getProductSingle = (state) => state.product.productSingle;
export const getSingleProductStatus = (state) => state.product.productSingleStatus;
export default productsSlice.reducer;
