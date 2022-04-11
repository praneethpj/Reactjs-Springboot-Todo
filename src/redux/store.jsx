import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlices";
import userReducer from "./userSlice";
import clickReducer from "./clickSlice";
import dataReducer from "./dataSlice";
import pageReducer from "./pageSlice";

export default configureStore({
    reducer:{
        tasks: taskReducer,
        user:userReducer,
        click:clickReducer,
        data:dataReducer,
        page:pageReducer
    }
});