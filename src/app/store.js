import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/slices/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
