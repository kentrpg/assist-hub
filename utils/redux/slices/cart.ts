import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/utils/redux/store";
import { createSelector } from '@reduxjs/toolkit';
import { CartItem } from "@/components/pages/cart/ProductCard/data";

type CartState = {
  items: CartItem[];
  activeCartId: number | null;
  isInitialized: boolean;
};

const initialState: CartState = {
  items: [{
    "cartId": 22,
    "name": "【全地形】越野輪椅",
    "description": "為戶外越野而生，耐用鋼製結構與大輪徑設計，可應對各種地形挑戰，適合熱愛戶外活動或需要高承重的使用者。",
    "quantity": 1,
    "rent": 2000.00,
    "deposit": 0.00,
    "fee": 200.00,
    "amount": 2000.00,
    "period": 30,
    "rentDate": "2025-01-17T00:06:32.887",
    "rentStamp": "2025-01-17",
    "returnDate": "2025-01-17T00:06:32.887",
    "returnStamp": "2025-01-17",
    "imgSrc": "http://52.172.145.130:8080/picture/wheelChair/wheelChair-6.jpg",
    "imgAlt": "【全地形】越野輪椅"
  }],
  activeCartId: null,
  isInitialized: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, {payload}: PayloadAction<CartItem[]>) => {
      state.items = payload;
      state.isInitialized = true;
      state.activeCartId = payload[0]?.cartId || null;
    },
    updateCartItem: (state, {payload}: PayloadAction<CartItem>) => {
      const index = state.items.findIndex(item => item.cartId === payload.cartId);
      if (index === -1) {
        console.error(`找不到 cartId 為 ${payload.cartId} 的項目`);
        return;
      }
      state.items[index] = payload;
    },
    removeCartItem: (state, {payload}: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.cartId !== payload);
      if (state.activeCartId === payload) {
        state.activeCartId = state.items[0]?.cartId || null;
      }
    },
    setActiveCartId: (state, {payload}: PayloadAction<number | null>) => {
      state.activeCartId = payload;
    },
  },
});

export const { setCartItems, updateCartItem, removeCartItem, setActiveCartId } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

export const selectActiveCartItem = createSelector(
  [(state: RootState) => state.cart.items, 
    (state: RootState) => state.cart.activeCartId],
  (items, activeId) => items.find((item: CartItem) => item.cartId === activeId)
);

export const clearActiveCartId = () => {
  return setActiveCartId(null);
};
