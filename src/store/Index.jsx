import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./handlers/User";
export default configureStore({ reducer: { users: userSlice } });