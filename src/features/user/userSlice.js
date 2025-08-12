import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedIn: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action) {
            Object.assign(state, action.payload);
            state.loggedIn = !!action.payload.token;
            if (action.payload.token) {
                localStorage.setItem("token", action.payload.token);
            }
        },
        logout(state) {
            state.id = undefined;
            state.name = undefined;
            state.email = undefined;
            state.token = undefined;
            state.loggedIn = false;
            localStorage.removeItem("token");
        },
    },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
