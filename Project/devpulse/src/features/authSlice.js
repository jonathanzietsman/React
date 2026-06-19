import { createSlice } from '@reduxjs/toolkit';

/**
 * Authentication State Slice
 * Tracks whether a user is logged in and stores their profile metadata.
 */
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,          // Holds user details (uid, email) when logged in
    status: 'idle',      // 'idle' | 'loading' | 'succeeded' | 'failed'
    isInitialized: false // Tracks if Firebase has checked the user session on page load
  },
  reducers: {
    /**
     * Sets the active user in global state when login/signup occurs
     */
    setUser: (state, action) => {
      state.user = action.payload;
      state.status = 'succeeded';
      state.isInitialized = true;
    },
    /**
     * Clears user data from global state upon logging out
     */
    clearUser: (state) => {
      state.user = null;
      state.status = 'idle';
      state.isInitialized = true;
    }
  }
});

// Export the action creators for components to dispatch
export const { setUser, clearUser } = authSlice.actions;

// Export the reducer to be registered in store.js
export default authSlice.reducer;