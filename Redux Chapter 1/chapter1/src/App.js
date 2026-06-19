// Beginning React (Greg Lim) — Chapter 1: Introduction to React
// This is our first React component. Components are reusable UI building blocks.

// Import the core React library and the base 'Component' class from the 'react' package.
// This allows us to use JSX syntax and create class-based components.
import React, { Component } from 'react';

// Define a new class component named 'App' that inherits features from React's base 'Component' class.
// Class components are one of two ways to make components in React (the other being Functional components).
class App extends Component {
  
  // Every class component requires a render() method.
  // React automatically calls this method to determine what should be displayed on the screen.
  render() {
    // The render method must return a description of the UI.
    // This lookalike HTML is actually JSX (JavaScript XML).
    return (
      // JSX elements must be wrapped in a single root element (in this case, a <div>).
      <div>
        <h1>Hello, React!</h1>
        <p>Welcome to your first React application.</p>
      </div>
    );
  }
}

// Export the 'App' component so it can be imported and used in other files, 
// such as our application entry point (index.js).
export default App;