import { configureStore } from "@reduxjs/toolkit";

// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import adminReducer from "./pages/cms/adminSlice";
import categoryReducer from './pages/category/categorySlice'
import systemReducer from './system/systemSlice'
import poReducer from "./pages/payment-option/poSlice";

const store = configureStore({
    reducer: {
        adminInfo : adminReducer,
        categoryInfo: categoryReducer,
        system: systemReducer,
        poInfo: poReducer
    }
})

export default store;