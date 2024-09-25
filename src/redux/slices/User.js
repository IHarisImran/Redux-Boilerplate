import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) { state.push(action.payload) },
        removeUser(state, action) { state.splice(action.payload, 1) },
        removeAllUser() { return [] }
    }
});

export default userSlice.reducer;
const { addUser, removeUser, removeAllUser } = userSlice.actions;

export const useUser = () => {
    const dispatch = useDispatch(),
        setUserState = data => dispatch(addUser(data)),
        removeUserState = data => dispatch(removeUser(data)),
        removeAllUsersState = () => dispatch(removeAllUser());
    return { setUserState, removeUserState, removeAllUsersState };
};