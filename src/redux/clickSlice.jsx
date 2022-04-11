import { createSlice } from "@reduxjs/toolkit";

export const clickSlice = createSlice({
    name: "click",
    initialState:[],
    reducers:{
        setClickId: (state, action)=>{
            state.splice(0, state.length);
            state.push(action.payload);
            
        },
    
        getClickId: (state, action)=>{
           // console.log("id "+state.value)
             return state.value;
        },
    }
});

export const {setClickId, getClickId} = clickSlice.actions;

export default clickSlice.reducer;