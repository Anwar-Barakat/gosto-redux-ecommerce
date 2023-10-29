import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      try {
        const exists = state.cart.find(
          (cartProd) => cartProd.id === product.id
        );
        if (exists) {
          exists.qty++;
          exists.totalPrice += parseFloat(product.price);
        } else {
          product.qty++;
          state.cart.push({
            totalPrice: parseFloat(product.price),
            ...product,
          });
        }

        state.totalAmount++;
        state.totalPrice += parseFloat(product.price);
      } catch (error) {
        return error;
      }
    },
    removeFromCart: (state, action) => {
      const product = action.payload;

      try {
        const exists = state.cart.find(
          (cartProd) => cartProd.id === product.id
        );
        if (exists && exists.qty === 1) {
          state.cart = state.cart.filter((prod) => prod.id !== exists.id);
        } else {
          exists.qty--;
          exists.totalPrice -= product.price;
        }
        state.totalAmount--;
        state.totalPrice -= product.price;
      } catch (error) {}
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;
