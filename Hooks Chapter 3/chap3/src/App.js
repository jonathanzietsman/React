import React from 'react';
import Products from './Products';
import Rating from './Rating';
import { Button } from 'react-bootstrap';
// Import Bootstrap CSS to enable styling for bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // A boolean flag used to control the disabled state of the button below
  const isValid = true;

  return (
    <div>
      {/* The section below is currently commented out. 
        It demonstrates how to render the Products component and styled Bootstrap buttons.
      
        <h1>
          Learn React Hooks
          <Products />
        </h1>
        <Button variant='danger'>Default</Button>
        <br />
        <Button variant='primary' disabled={!isValid}>
          Default
        </Button>
        <br /> 
      */}
      
      {/* Rendering five separate Rating components, each initialized with a different starting score */}
      <Rating rating="1" />
      <Rating rating="2" />
      <Rating rating="3" />
      <Rating rating="4" />
      <Rating rating="5" />
    </div>
  );
}

export default App;