import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    adminList : [],
}

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        setAdmin: (state, {payload}) =>{
            state.adminShow = payload
        }
    }
})

const { reducer, actions } = adminSlice

export const { setAdmin } = actions;
export default reducer;