// Beginning React (Greg Lim) — Chapter 4: Building a Product List App
// Combines nested components in a strict tree hierarchy: App → Products → Product → Rating

import React, { Component } from 'react';
import Products from './Products'; // Import the parent product-list component

// App is a Class-based component extending React's base Component class
class App extends Component {
  
  // The mandatory render method determines the UI look and structure of this component
  render() {        
    return (
      <div>
        {/* Render the Products component which houses our list data */}
        <Products />        
      </div>
    );
  }
}

// Export App so it can be safely imported and utilized by index.js
export default App;