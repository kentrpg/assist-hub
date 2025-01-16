import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
  name: string;
  gender: string;
  dobStamp: string;
  email: string;
  phone: string;
  contactTime: string;
  addressZip: string;
  addressCity: string;
  addressDistrict: string;
  addressDetail: string;
};

const initialState: UserState = {
  name: "",
  gender: "",
  dobStamp: "",
  email: "",
  phone: "",
  contactTime: "",
  addressZip: "",
  addressCity: "",
  addressDistrict: "",
  addressDetail: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.name = action.payload.name;
      state.gender = action.payload.gender;
      state.dobStamp = action.payload.dobStamp;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.contactTime = action.payload.contactTime;
      state.addressZip = action.payload.addressZip;
      state.addressCity = action.payload.addressCity;
      state.addressDistrict = action.payload.addressDistrict;
      state.addressDetail = action.payload.addressDetail;
    },
    resetUser: () => initialState,
  },
});

export const { setUser, resetUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
