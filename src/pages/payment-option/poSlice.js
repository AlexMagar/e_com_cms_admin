import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    paymentOptions : [],
}

const paymentOptionsSlice = createSlice({
    name: "Payment Option",
    initialState,
    reducers:{
        setPaymentOptions: (state, {payload}) =>
        {
            if(state.paymentOptions.length === 0 && payload.length === 0){
                return;
            }

            state.paymentOptions = payload
        }
    }
})

const {reducer, actions } = paymentOptionsSlice

export const {setPaymentOptions} = actions

export default reducer;
