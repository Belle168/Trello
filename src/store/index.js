import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import columnSlice from "./cart-slice";

const store = configureStore({
    reducer : {
        auth : authSlice.reducer,
        column : columnSlice.reducer,
    }
})
export default store;