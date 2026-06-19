import React, { useState } from 'react';
import { auth } from '../../config/firebase-config.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import './login.css'; // Import external stylesheet

/**
 * Login Component
 * Handles user authentication (both Logging In and Signing Up) 
 * using Firebase Authentication services.
 */
const Login = () => {
  // --- STATE MANAGEMENT ---
  const [isSignUp, setIsSignUp] = useState(false); // Toggles between Login mode (false) and Sign Up mode (true)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');          // Captures and displays Firebase auth errors
  const [loading, setLoading] = useState(false);    // Prevents double-submits during API calls

  /**
   * Handles the submission of the Auth form.
   * Interacts with Firebase Auth SDK based on the current mode (isSignUp).
   * @param {Event} e - The standard form submission event
   */
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh on form submit
    setError('');       // Reset any previous error messages
    setLoading(true);   // Disable button and show loading state

    try {
      if (isSignUp) {
        // Execute Firebase registration
        await createUserWithEmailAndPassword(auth, email, password);
        alert('Account created successfully!');
      } else {
        // Execute Firebase login
        await signInWithEmailAndPassword(auth, email, password);
        alert('Logged in successfully!');
      }
    } catch (err) {
      // Format common Firebase errors to make them user-friendly for the UI
      setError(err.message.replace('Firebase: ', ''));
    } finally {
      setLoading(false); // Re-enable button after API call finishes
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>{isSignUp ? 'Create DevPulse Account' : 'Welcome to DevPulse'}</h2>
        <p className="login-subtitle">Track your code, monitor your health.</p>

        {/* Conditional Rendering: Displays error box only if an error state exists */}
        {error && <div className="login-error">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          {/* Email Input Field */}
          <div className="input-group">
            <label>Email Address</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              className="login-input"
            />
          </div>

          {/* Password Input Field */}
          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              className="login-input"
            />
          </div>

          {/* Submit Button - Disabled while loading to prevent concurrent auth calls */}
          <button type="submit" disabled={loading} className="login-button">
            {loading ? 'Please wait...' : isSignUp ? 'Sign Up' : 'Log In'}
          </button>
        </form>

        {/* View Switcher: Toggles the form mode between Sign In and Sign Up */}
        <p className="toggle-text">
          {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
          <span 
            onClick={() => { setIsSignUp(!isSignUp); setError(''); }} 
            className="toggle-link"
          >
            {isSignUp ? 'Log In here' : 'Register here'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;