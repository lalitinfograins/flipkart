import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./redux/SidebarSlice";
import categoryReducer from "./redux/categorySlice";
import productReducer from "./redux/productsSlice";
import cartReducer from "./redux/cartSlice";
import registrationReducer from "./redux/registrationSlice";
const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        category: categoryReducer,
        product: productReducer,
        cart: cartReducer,
        registration: registrationReducer,
    }
});

export default store;