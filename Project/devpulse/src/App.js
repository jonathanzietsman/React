import React, { useEffect } from 'react';
import { clearProjects } from './features/projectsSlice.js';
import { clearLogs } from './features/healthSlice';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase-config.js';
import { setUser, clearUser } from './features/authSlice.js';
import Login from './pages/login/login.js';
import Dashboard from './pages/dashboard/dashboard.js';

/**
 * Main Application Component
 * Manages the top-level authentication listener and controls 
 * which page (Login or Dashboard) the user sees.
 */
function App() {
  const dispatch = useDispatch();
  
  // Grab the current user and initialization status from our global Redux store
  const { user, isInitialized } = useSelector((state) => state.auth);

  /**
   * Side Effect: Firebase Auth Observer
   * Runs once when the app mounts. It listens for any changes in the 
   * user's authentication state (login, logout, or session persistence).
   */
  useEffect(() => {
    // onAuthStateChanged returns an unsubscribe function to clean up the listener
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        // If a user exists, extract the critical pieces and send them to Redux
        dispatch(setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
        }));
      } else {
        // If no user exists, clear out the user state in Redux
        dispatch(clearUser());
        dispatch(clearProjects());
        dispatch(clearLogs());
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, [dispatch]);

  // Loading Guard: Displays a loading state while Firebase checks if a session exists
  if (!isInitialized) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'Arial' }}>
        <h3>Loading DevPulse...</h3>
      </div>
    );
  }

  return (
    <div className="App">
      {user ? <Dashboard /> : <Login />}
    </div>
  );
}

export default App;