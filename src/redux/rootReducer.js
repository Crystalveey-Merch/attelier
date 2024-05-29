import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./user.slice";
import usersSlice from "./users.slice";
import cartSlice from "./cart.slice";   

const rootReducers = combineReducers({
    user: userSlice,
    users: usersSlice,
    cart: cartSlice
});

export default rootReducers;