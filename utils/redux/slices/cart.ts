import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EnhancedCartItem } from "@/components/pages/cart/ProductCard/data";

type CartState = {
  items: EnhancedCartItem[];
  activeCartId: number | null;
};

const initialState: CartState = {
  items: [],
  activeCartId: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, action: PayloadAction<EnhancedCartItem[]>) => {
      state.items = action.payload;
      state.activeCartId = action.payload[0]?.cartId || null;
    },
    updateCartItem: (state, action: PayloadAction<EnhancedCartItem>) => {
      const index = state.items.findIndex(item => item.cartId === action.payload.cartId);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    removeCartItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.cartId !== action.payload);
      if (state.activeCartId === action.payload) {
        state.activeCartId = state.items[0]?.cartId || null;
      }
    },
    setActiveCartId: (state, action: PayloadAction<number>) => {
      state.activeCartId = action.payload;
    },
  },
});

export const { setCartItems, updateCartItem, removeCartItem, setActiveCartId } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
