import { createSlice } from '@reduxjs/toolkit';

/**
 * Projects State Slice
 * Manages the local copy of the user's active software projects fetched from Firestore.
 */
const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    items: [],           // Array holding project objects [{ id, name, client, totalHours, status }]
    status: 'idle',      // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null          // Captures database connection errors
  },
  reducers: {
    // Sets the loading state when fetching from database begins
    fetchProjectsStart: (state) => {
      state.status = 'loading';
    },
    // Injects the array of projects fetched from Firestore into the state store
    fetchProjectsSuccess: (state, action) => {
      state.status = 'succeeded';
      state.items = action.payload;
    },
    // Captures errors if the database read fails
    fetchProjectsFailure: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    // Optimistically updates local state when a new project is created
    addProjectSuccess: (state, action) => {
      state.items.push(action.payload);
    },
    clearProjects: (state) => {
      state.items = [];
      state.status = 'idle';
      state.error = null;
    }
  }
});

// Export actions for components to dispatch
export const { 
  fetchProjectsStart, 
  fetchProjectsSuccess, 
  fetchProjectsFailure, 
  addProjectSuccess, 
  clearProjects
} = projectsSlice.actions;

export default projectsSlice.reducer;
