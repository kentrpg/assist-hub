import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/utils/redux/store";
import { createSelector } from '@reduxjs/toolkit';

type UserInquiryState = {
  level: string;
  additionalInfo: string;
};

const initialState: UserInquiryState = {
  level: "1",
  additionalInfo: "步態穩定適合平地及短距離移動。",
};

const userInquirySlice = createSlice({
  name: "userInquiry",
  initialState,
  reducers: {
    setUserInquiry: (state, {payload}: PayloadAction<UserInquiryState>) => {
      state.level = payload.level;
      state.additionalInfo = payload.additionalInfo;
    },
    resetUserInquiry: () => {
      return initialState;
    },
  },
});

export const { setUserInquiry, resetUserInquiry } = userInquirySlice.actions;
export const userInquiryReducer = userInquirySlice.reducer;

export const selectUserInquiry = createSelector(
  [(state: RootState) => state.userInquiry],
  (userInquiry) => userInquiry
);

