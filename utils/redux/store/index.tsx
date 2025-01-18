// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "@/utils/redux/slices/user";
import { cartReducer } from "@/utils/redux/slices/cart";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
