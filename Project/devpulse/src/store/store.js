import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice.js';
import projectsReducer from '../features/projectsSlice.js';
import healthReducer from '../features/healthSlice.js';

/**
 * Global Redux Store Configuration
 * Combines all individual feature slices into a single, centralized state tree.
 */
export const store = configureStore({
  reducer: {
    auth: authReducer, // Handles global authentication state
    projects: projectsReducer,
    health: healthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Disables serializable check to allow Firebase user objects in state safely
      serializableCheck: false,
    }),
});