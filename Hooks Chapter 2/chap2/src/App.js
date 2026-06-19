import React from 'react';
import Products from './Products'; // Importing the Products component to use inside App

function App(){
  return(
    <div>
      <h1>
        Learn React Hooks
        {/* Rendering the Products component inside the h1 tag */}
        <Products />
      </h1>
    </div>
  );
}

// Exporting App as the default export so it can be imported in index.js
export default App;