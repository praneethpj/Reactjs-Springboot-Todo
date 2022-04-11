import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: "data",
    initialState:[],
    reducers:{
        setDataId: (state, action)=>{
            state.splice(0, state.length);
            state.push(action.payload);
            
        },
    
        getDataId: (state, action)=>{
           // console.log("id "+state.value)
             return state.value;
        },
    }
});

export const {setDataId, getDataId} = dataSlice.actions;

export default dataSlice.reducer;