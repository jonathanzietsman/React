import React from 'react';
// Import Bootstrap global CSS styles for layout and styling utilities
import 'bootstrap/dist/css/bootstrap.min.css';

// Import the Products container component
import Products from './Products';

function App() {
  return (
    <div>
        {/* Render the core Products list component */}
        <Products />   
    </div>
  );
}

export default App;