/* eslint-disable no-unused-vars */
import {  createSlice } from '@reduxjs/toolkit';



const initialState = {
    users: [],
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUsers: (state, action) => {
            state.users = action.payload
        },
        updateUsersProfile: (state, action) => {
            const { id } = action.payload;
            const index = state.users.findIndex((user) => user.id === id);
            if (index !== -1) {
                state.users[index] = action.payload;
            }
        },
    }
});

export const {
    addUsers,
    updateUsersProfile
} = usersSlice.actions;

export const selectUsers = (state) => state.users.users;

export default usersSlice.reducer