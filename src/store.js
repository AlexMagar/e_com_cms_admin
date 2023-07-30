import { configureStore } from "@reduxjs/toolkit";

// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import adminReducer from "./pages/cms/adminSlice";
import categoryReducer from './pages/category/categorySlice'
import systemReducer from './system/systemSlice'

const store = configureStore({
    reducer: {
        adminInfo : adminReducer,
        categoryInfo: categoryReducer,
        system: systemReducer,
    }
})

export default store;