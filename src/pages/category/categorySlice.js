import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    categoryList : [],
}

const categorySlice = createSlice({
    name: "Category",
    initialState,
    reducers:{
        setCategory: (state, {payload}) =>
        {
            if(state.categoryList.length === 0 && payload.length === 0){
                return;
            }

            state.categoryList = payload
        }
    }
})

const {reducer, actions } = categorySlice

export const {setCategory} = actions

export default reducer;
