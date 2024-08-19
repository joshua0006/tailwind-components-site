// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addToCart(state, action) {
      const { productId, quantity } = action.payload;
      const index = state.items.findIndex(item => item.productId === productId);
      if (index >= 0) {
        state.items[index].quantity += quantity;
      } else {
        state.items.push({ productId, quantity });
      }
    },
    removeFromCart(state, action) {
      const productId = action.payload;
      state.items = state.items.filter(item => item.productId !== productId);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
