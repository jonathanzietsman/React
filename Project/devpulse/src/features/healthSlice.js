import { createSlice } from '@reduxjs/toolkit';

/**
 * Health State Slice
 * Manages time-tracking, mood, and burnout logs fetched from Firestore.
 */
const healthSlice = createSlice({
  name: 'health',
  initialState: {
    logs: [],            // Array holding developer session logs [{ id, projectId, hours, mood, burnout, notes }]
    status: 'idle',      // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
  },
  reducers: {
    // Sets loading state when fetching logs begins
    fetchLogsStart: (state) => {
      state.status = 'loading';
    },
    // Injects the logs fetched from Firestore into the state store
    fetchLogsSuccess: (state, action) => {
      state.status = 'succeeded';
      state.logs = action.payload;
    },
    // Captures errors if the database read fails
    fetchLogsFailure: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    // Appends a newly created developer log directly to the state array
    addLogSuccess: (state, action) => {
      state.logs.push(action.payload);
    },
    clearLogs: (state) => {
      state.logs = [];
      state.status = 'idle';
      state.error = null;
    }
  }
});

// Export actions for components to dispatch
export const { 
  fetchLogsStart, 
  fetchLogsSuccess, 
  fetchLogsFailure, 
  addLogSuccess,
  clearLogs
} = healthSlice.actions;

export default healthSlice.reducer;