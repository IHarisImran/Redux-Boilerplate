import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/User";

export default configureStore({
    reducer: {
        users: userSlice
    },
    devTools: false
});