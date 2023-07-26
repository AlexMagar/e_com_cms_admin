import { configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import adminReducer from "./pages/cms/adminSlice";

const adminPresistConfig = {
    key: "adminInfo",
    storage,
};

const persistedAdminReducer = persistReducer(adminPresistConfig, adminReducer);

const store = configureStore({
    reducer: {
        adminInfo : persistedAdminReducer,

    }
})

const persistor = persistStore(store);

export { store, persistor};