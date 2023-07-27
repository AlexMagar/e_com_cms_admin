import { configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import adminReducer from "./pages/cms/adminSlice";

const store = configureStore({
    reducer: {
        adminInfo : adminReducer,
    }
})

export default store;