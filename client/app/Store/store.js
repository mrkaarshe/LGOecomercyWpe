import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { saveMiddleware, hydrateCart } from './cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    /* …other slices… */
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveMiddleware),
});

/* -------  re-hydrate once on load  ------- */
if (typeof window !== 'undefined') {          // make sure we’re on the client
  try {
    const raw = localStorage.getItem('cart');
    if (raw) store.dispatch(hydrateCart(JSON.parse(raw)));
  } catch {}
}