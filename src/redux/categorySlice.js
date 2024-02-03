import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../urls/apiUrl";
import { STATUS } from "../urls/Status";
import axios from "axios";

const initialState = {
    categories: [],
     categoriesStatus: STATUS.IDLE,
     categoryProducts: [],
     categoryProductsStatus: STATUS.IDLE
};

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers : (builder) => {
        builder.addCase(fetchAsyncCategories.pending, (state, action) => {
            state.categoriesStatus = STATUS.LOADING;
        })
        .addCase(fetchAsyncCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
            state.categoriesStatus = STATUS.SUCCEEDED;
        })
        .addCase(fetchAsyncCategories.rejected, (state, action) => {
            state.categoriesStatus = STATUS.FAILED;
        })

        .addCase(fetchAsyncProductOfCategory.pending, (state, action) => {
            state.categoryProductsStatus = STATUS.LOADING;
        })
        .addCase(fetchAsyncProductOfCategory.fulfilled, (state, action) => {
            state.categoryProducts = action.payload;
            state.categoryProductsStatus = STATUS.SUCCEEDED;
        })
        .addCase(fetchAsyncProductOfCategory.rejected, (state, action) => {
            state.categoryProductsStatus = STATUS.FAILED;
        })
    }
});


export const fetchAsyncCategories = createAsyncThunk('categories/fetch' , async() => {
    try {
        const response = await axios.get(`${BASE_URL}products/categories`);
        return response.data;
    } catch (error) {
        throw error; // You can handle errors in your component or catch them in the async action
    }
});

export const fetchAsyncProductOfCategory = 
createAsyncThunk("category-products/feach" ,async(category) =>{
    try {
        const response = await axios.get(`${BASE_URL}products/category/${category}`);
        return response.data.products;
    } catch (error) {
        throw error; // You can handle errors in your component or catch them in the async action
    }
});

export const getAllCategories = (state) => state.category.categories;
export const getAllProductsByCategory = (state) => state.category.categoryProducts;
export const getCategoryProductsStatus = (state) => state.category.categoryProductsStatus;

export default categorySlice.reducer;
