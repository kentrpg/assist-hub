import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type InquiryBarState = Array<{
  id: number;
  imgSrc: string;
  name: string;
  rent: number;
}>;

const initialState: InquiryBarState = [
  {
    id: 1,
    imgSrc: "https://i4.momoshop.com.tw/1692633920/goodsimg/0006/110/758/6110758_R_m.webp",
    name: "拐杖1號",
    rent: 1000,
  },
  {
    id: 2,
    imgSrc: "https://i4.momoshop.com.tw/1692633920/goodsimg/0006/110/758/6110758_R_m.webp",
    name: "拐杖2號",
    rent: 1000,
  },
  {
    id: 3,
    imgSrc: "https://i4.momoshop.com.tw/1692633920/goodsimg/0006/110/758/6110758_R_m.webp",
    name: "拐杖3號",
    rent: 1000,
  },
];

const inquiryBarSlice = createSlice({
  name: "inquiryBar",
  initialState,
  reducers: {
    // 設置整個詢問單的內容
    setInquiryBar: (state, action: PayloadAction<InquiryBarState>) => {
      return action.payload;
    },

    // 重置詢問單
    resetInquiryBar: () => {
      return initialState;
    },

    // 添加商品到詢問單，最多允許 3 個
    addToInquiryBar: (
      state,
      action: PayloadAction<{
        id: number;
        imgSrc: string;
        name: string;
        rent: number;
      }>,
    ) => {
      if (state.length >= 3) {
        // 如果商品數量已滿，直接返回原狀態
        return state;
      }

      // 檢查是否已經存在該商品，避免重複添加
      const exists = state.find((item) => item.id === action.payload.id);
      if (!exists) {
        state.push(action.payload);
      }
    },

    // 從詢問單中移除商品
    removeFromInquiryBar: (state, action: PayloadAction<number>) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const {
  setInquiryBar,
  resetInquiryBar,
  addToInquiryBar,
  removeFromInquiryBar,
} = inquiryBarSlice.actions;

export const inquiryBarReducer = inquiryBarSlice.reducer;
