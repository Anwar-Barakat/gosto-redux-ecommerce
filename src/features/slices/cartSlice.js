import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    amount: 0,
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

        console.log(exists);
        if (exists) {
          exists.amount++;
          exists.totalPrice += parseFloat(product.price);
        } else {
          state.cart.push({
            amount: 1,
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
    removeFromCart: (state, action) => {},
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;
