import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    // isLoggedIn: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload
            // state.isLoggedIn = true;
        },
        logout: (state) => {
            state.user = null
        },
        updateUserProfile: (state, action) => {
            state.user = {
                ...state.user,
                ...action.payload
            }
        }
    }
});

export const {
    loginUser,
    logout,
    updateUserProfile
} = userSlice.actions;

export const selectUser = (state) => state.user.user

export default userSlice.reducer