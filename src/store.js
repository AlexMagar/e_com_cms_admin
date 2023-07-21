import { configureStore } from "@reduxjs/toolkit";
import cmsReducer from './pages/cms/cmsSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const cmsPersistConfig = {
    key: "cmsInfo",
    storage,
}

const persistedCmsReducer = persistReducer(cmsPersistConfig, cmsReducer);

const store = configureStore({
    reducer:{
        cmsInfo: persistedCmsReducer,
    }
})

const persistor = persistStore(store);

export {store, persistor};