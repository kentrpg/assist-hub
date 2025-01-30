import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/utils/redux/store";
import { createSelector } from '@reduxjs/toolkit';
import { FilterProductType } from "@/types/getFilterProducts";

type SuggestProductsState = {
  products: FilterProductType[];
};

const initialState: SuggestProductsState = {
  products: [],
};

const suggestProductsSlice = createSlice({
  name: "suggestProducts",
  initialState,
  reducers: {
    setSuggestProducts: (state, action: PayloadAction<FilterProductType[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setSuggestProducts } = suggestProductsSlice.actions;
export const suggestProductsReducer = suggestProductsSlice.reducer;

export const selectSuggestProducts = (state: RootState) => state.suggestProducts.products;
