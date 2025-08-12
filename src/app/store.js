import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import ordersReducer from "../features/orders/ordersSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        orders: ordersReducer,
    },
});

