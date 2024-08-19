// store.jsx
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import cartReducer from './cartSlice'; // Ensure this path is correct

// Configuration for redux-persist
const persistConfig = {
  key: 'root',
  storage,
};

// Create a persisted reducer
const persistedCartReducer = persistReducer(persistConfig, cartReducer);

// Create the store
export const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
  },
});

// Create a persistor
export const persistor = persistStore(store);
