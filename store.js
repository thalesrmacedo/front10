import { configureStore } from '@reduxjs/toolkit';
import contadorReducer from '../features/contador/contadorSlice';

export const store = configureStore({
  reducer: {
    contador: contadorReducer,
  },
});
