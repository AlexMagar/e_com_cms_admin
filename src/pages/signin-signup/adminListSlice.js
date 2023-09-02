import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    adminList : []
}

const adminListSlice = createSlice({
    name: "adminList",
    initialState,
    reducers: {
        setAdminList: (state, {payload}) =>{
            state.adminList = payload
        }
    }
})

const { reducer, actions} = adminListSlice

export const { setAdminList } = actions

export default reducer