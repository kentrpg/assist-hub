// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "@/utils/redux/slices/user"; 

const store = configureStore({
  reducer: {
    user: userReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
