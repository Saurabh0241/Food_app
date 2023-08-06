import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
  },

  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      return { items: [] };
    },
  },
});
export const { addItem, removeItem, clearCart } = CartSlice.actions;

export default CartSlice.reducer;
