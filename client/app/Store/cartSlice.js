// store/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      const { id, name, image, category, price, quantity = 1 } = payload;
      const exist = state.items.find((i) => i.id === id);
      if (exist) exist.quantity += quantity;
      else state.items.push({ id, name, image, category, price, quantity });
    },
    removeFromCart(state, { payload }) {
      state.items = state.items.filter((i) => i.id !== payload.id);
    },
    clearCart(state) {
      state.items = [];
    },
    setQuantity(state, { payload }) {
      const item = state.items.find((i) => i.id === payload.id);
      if (item) item.quantity = payload.quantity;
    },
    increaseQuantity(state, { payload }) {
      const item = state.items.find((i) => i.id === payload.id);
      if (item) item.quantity += 1;
    },
    decreaseQuantity(state, { payload }) {
      const item = state.items.find((i) => i.id === payload.id);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    hydrateCart(state, { payload }) {
      state.items = payload;
    },
  },
});

/* ------------------------------------------------------------------ */
/* auto-save middleware (runs after every cart mutation)                */
/* ------------------------------------------------------------------ */
const saveMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if (cartSlice.actions[action.type]) {
    localStorage.setItem('cart', JSON.stringify(store.getState().cart.items));
  }
  return result;
};

export { saveMiddleware };   // add this to your store:  middleware: (gDM) => gDM().concat(saveMiddleware)
export const {
  addToCart,
  removeFromCart,
  clearCart,
  setQuantity,
  increaseQuantity,
  decreaseQuantity,
  hydrateCart,
} = cartSlice.actions;

export default cartSlice.reducer;