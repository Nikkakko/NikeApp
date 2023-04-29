import { createSlice } from '@reduxjs/toolkit';
import products from '../data/products';

const initialState = {
  products: products,
  selectedProduct: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = state.products.find(p => p.id === action.payload);
    },
  },
});

export const { setSelectedProduct } = productsSlice.actions;

export default productsSlice.reducer;
