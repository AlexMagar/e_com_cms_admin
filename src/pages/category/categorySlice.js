import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    categoryList : {}
}

const categorySlice = createSlice({
    name: "Category",
    initialState,
    reducers:{
        setCategory: (state, {payload}) =>{
            state.categoryShow = payload
        }
    }
})

const {reducer, actions } = categorySlice

export const {setCategory} = actions

export default reducer;
