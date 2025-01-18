import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EnhancedCartItem } from "@/components/pages/cart/ProductCard/data";

type CartState = {
  items: EnhancedCartItem[];
  activeCartId: number | null;
  isInitialized: boolean;
};

const initialState: CartState = {
  items: [],
  activeCartId: null,
  isInitialized: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, {payload}: PayloadAction<EnhancedCartItem[]>) => {
      state.items = payload;
      state.isInitialized = true;
      state.activeCartId = payload[0]?.cartId || null;
    },
    updateCartItem: (state, {payload}: PayloadAction<EnhancedCartItem>) => {
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
    setActiveCartId: (state, {payload}: PayloadAction<number>) => {
      state.activeCartId = payload;
    },
  },
});

export const { setCartItems, updateCartItem, removeCartItem, setActiveCartId } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
