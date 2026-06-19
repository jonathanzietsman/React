// Beginning React (Greg Lim) — Chapter 3: Props, State & Bootstrap
// This chapter introduces passing data via props and managing local state with setState.

import React, { Component } from 'react';
import Products from './Products';
import { Button } from 'react-bootstrap';
import Rating from './Rating';

class App extends Component {
  render() {
    // const isValid = true;

    return (
      <div>
        {/* Earlier chapter examples are kept commented for reference: */}
        {/* <h1>Hello, React!</h1> */}
        {/* <p>Welcome to your first React application.</p> */}
        {/* <Products /> */}
        {/* <Button variant='danger'>Default</Button> */}
        {/* <Button variant='primary' disabled>Default</Button> */}
        {/* <Button variant='primary' disabled={!isValid}>Default</Button> */}

        {/* Each Rating receives a different initial value through the 'rating' prop. */}
        <Rating rating="1"/>
        <Rating rating="2"/>
        <Rating rating="3"/>
        <Rating rating="4"/>
        <Rating rating="5"/>
      </div>
    );
  }
}

export default App;
