import { createSlice } from "@reduxjs/toolkit";

export const tasksSlices = createSlice({
    name: "tasks",
    initialState:[],
    reducers:{
        addTask: (state, action)=>{
            const newTask = {
                id: action.payload.id,
                title: action.payload.title,
                content:action.payload.content,
                username:action.payload.username,
                status:action.payload.status,
                date:action.payload.modified
            }
            state.push(newTask);
        },
        deleteTask: (state, action)=>{
            return state.filter((item) => item.id !== action.payload.id);
        },
        getTask: (state, action)=>{
              const newTask = {
                id: action.payload.id,
                title: action.payload.title,
                content:action.payload.content,
                username:action.payload.username,
                status:action.payload.status,
                date:action.payload.modified
            }
            state.push(newTask);
        },
        updateTask: (state, action)=>{
           let updatedItems = { ...state.items };
            let task =state.filter((item) => item.id === action.payload.id);
            console.log("pp "+task[0].id);
            

        //     const newTask = {
        //       id: action.payload.id,
        //       title: action.payload.title,
        //       content:action.payload.content,
        //       username:action.payload.username,
        //       date:action.payload.modified
        //   }
         // state.push(newTask);
      },
      refreshTask: (state, action)=>{
        state.splice(0, state.length);
    }
    }
});

export const {addTask, deleteTask,getTask,refreshTask,updateTask} = tasksSlices.actions;

export default tasksSlices.reducer;