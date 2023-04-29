import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  deliveryPrice: 15,
  freeDeliveryFrom: 200,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const newProduct = action.payload.product;

      const existingProduct = state.items.find(
        item => item.id === newProduct.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...newProduct, quantity: 1 });
      }
    },
    changeQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      const existingProduct = state.items.find(item => item.id === id);

      if (quantity === 0) {
        state.items = state.items.filter(item => item.id !== id);
      }

      if (existingProduct) {
        existingProduct.quantity = quantity;
      }
    },
  },
});

export const { addCartItem, changeQuantity } = cartSlice.actions;

export const selectNumberOfItems = state => state.cart.items.length;

export const selectSubtotal = state =>
  state.cart.items.reduce(
    (sum, cartItem) => sum + cartItem.price * cartItem.quantity,
    0
  );

export const cartSelector = state => state.cart;

export const selectDeliveryPrice = createSelector(
  cartSelector,
  selectSubtotal,
  (cart, subtotal) => (subtotal > cart.freeDeliveryFrom ? 0 : cart.deliveryFee)
);

export const selectTotal = createSelector(
  selectSubtotal,
  selectDeliveryPrice,
  (subtotal, delivery) => subtotal + delivery
);
export default cartSlice.reducer;
