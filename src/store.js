import { configureStore } from "@reduxjs/toolkit";

// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import adminReducer from "./pages/signin-signup/adminSlice";
import categoryReducer from './pages/category/categorySlice'
import systemReducer from './system/systemSlice'
import poReducer from "./pages/payment-option/poSlice";
import productReducer from "./pages/product/productSlice";

const store = configureStore({
    reducer: {
        adminInfo : adminReducer,
        categoryInfo: categoryReducer,
        system: systemReducer,
        poInfo: poReducer,
        productInfo: productReducer,
    }
})

export default store;