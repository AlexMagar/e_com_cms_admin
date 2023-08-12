import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products : [],
}

const productSlice = createSlice({
    name: "Product",
    initialState,
    reducers:{
        setProduct: (state, {payload}) =>
        {
            if(state.paymentOptions.length === 0 && payload.length === 0 && payload === undefined){
                return;
            }

            state.paymentOptions = payload
        }
    }
})

const {reducer, actions } = productSlice

export const {setProduct} = actions

export default reducer;
