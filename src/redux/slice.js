
import { createSlice } from '@reduxjs/toolkit';

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('userState');
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (error) {
    console.error('Error loading state from localStorage:', error);
    return undefined;
  }
};

const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('userState', serializedState);
  } catch (error) {
    console.error('Error saving state to localStorage:', error);
  }
};

const initialState = loadStateFromLocalStorage() || {
  isLoggedIn: false,
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      saveStateToLocalStorage(state);
    },
    register: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      saveStateToLocalStorage(state);
    },
    editProfile: (state, action) => {
      const newState = {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    
      saveStateToLocalStorage(newState);
    },
  },
});

export const { login, logout, register, editProfile } = userSlice.actions;
export default userSlice.reducer;
