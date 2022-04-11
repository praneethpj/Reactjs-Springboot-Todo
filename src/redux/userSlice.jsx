import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "users",
    initialState:[],
    reducers:{
        addUser: (state, action)=>{
            const newUser = {
                username: action.username,
            }
            state.push(newUser);
        },
        getCurrentUser: (state)=>{
            return state.filter((item) => item.username);
        }
    }
});

export const {addUser, getCurrentUser} = userSlice.actions;

export default userSlice.reducer;