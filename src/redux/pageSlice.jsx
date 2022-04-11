import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
    name: "page",
    initialState:[],
    reducers:{
        setPageId: (state, action)=>{
            state.splice(0, state.length);
            state.push(action.payload);
            
        },
    
        getPageId: (state, action)=>{
           // console.log("id "+state.value)
             return state.value;
        },
    }
});

export const {setPageId, getPageId} = pageSlice.actions;

export default pageSlice.reducer;