import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId, quantity } = action.payload;
      const indexProductID = state.items.findIndex(item => item.productId === productId);
      if (indexProductID >= 0) {
        state.items[indexProductID].quantity += quantity;
      } else {
        state.items.push({ productId, quantity });
      }
    },
    removeFromCart(state, action) {
      const productId = action.payload;
      state.items = state.items.filter(item => item.productId !== productId);
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
