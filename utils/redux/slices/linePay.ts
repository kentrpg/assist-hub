import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/utils/redux/store";
import { createSelector } from '@reduxjs/toolkit';

type LinePayState = {
  webUrl: string;
  transactionId: string;
  finalAmount: number;
};

const initialState: LinePayState = {
  webUrl: "",
  transactionId: "",
  finalAmount: 0,
};

const linePaySlice = createSlice({
  name: "linePay",
  initialState,
  reducers: {
    resetLinePay: () => {
      return initialState;
    },
    setLinePay: (state, {payload}: PayloadAction<LinePayState>) => {
      state.webUrl = payload.webUrl;
      state.transactionId = payload.transactionId;
      state.finalAmount = payload.finalAmount;
    },
  },
});

export const { setLinePay, resetLinePay } = linePaySlice.actions;
export const linePayReducer = linePaySlice.reducer;

export const selectLinePay = createSelector(
  [(state: RootState) => state.linePay],
  (linePay) => linePay
);

