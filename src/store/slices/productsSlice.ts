import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductsState } from '../../types';

const initialState: ProductsState = {
  items: [],
  maxProducts: 5,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Omit<Product, 'id' | 'createdAt'>>) => {
      if (state.items.length < state.maxProducts) {
        state.items.push({
          id: Date.now(),
          ...action.payload,
          createdAt: new Date().toISOString(),
        });
      }
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...action.payload };
      }
    },
  },
});

export const { addProduct, removeProduct, updateProduct } = productsSlice.actions;
export default productsSlice.reducer;