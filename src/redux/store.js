// store.js

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice';

const store = configureStore({
  reducer: {
    user: userReducer,
    // Other reducers can be added here if needed
  },
});

export { store };
