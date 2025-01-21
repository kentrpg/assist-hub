// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "@/utils/redux/slices/user";
import { cartReducer } from "@/utils/redux/slices/cart";
import { inquiryBarReducer } from "@/utils/redux/slices/inquiryBar";
import { userInquiryReducer } from "@/utils/redux/slices/userInquiry";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    inquiryBar: inquiryBarReducer,
    userInquiry: userInquiryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
