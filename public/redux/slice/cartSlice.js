import { createSlice } from '@reduxjs/toolkit';
const items =
  localStorage.getItem('cartItems') !== null
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: items,
  },
  reducers: {
    addItem: (state, action) => {
      state.cartItems.push(action.payload);
      localStorage.setItem(
        'cartItems',
        JSON.stringify(state.cartItems.map((item) => item))
      );
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem(
        'cartItems',
        JSON.stringify(state.cartItems.map((item) => item))
      );
    },
  },
});
export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
