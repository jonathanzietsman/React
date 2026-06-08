import React from 'react';
import Products from './Products';
import Rating from './Rating';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  const isValid = true;

  return(
    <div>
      {/* <h1>
        Learn React Hooks
        <Products />
      </h1>
        <Button variant='danger'>Default</Button>
        <br />
        <Button variant='primary' disabled={!isValid}>
          Default
        </Button>
        <br /> */}
      <Rating rating="1" />
      <Rating rating="2" />
      <Rating rating="3" />
      <Rating rating="4" />
      <Rating rating="5" />
    </div>
  );
}

export default App;