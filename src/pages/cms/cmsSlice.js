import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    cms: [],
};

const cmsSlice = createSlice({
    name: 'cmsAdmin',
    initialState,
    reducers:{
        setCms: (state, {payload}) =>{
            state.cms = payload;
        }
    }
})

const { reducer, actions} = cmsSlice;
export const { setCms } = actions;
export default reducer;