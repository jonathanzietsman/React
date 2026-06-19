import React, { Component } from 'react'; 
import JumboTronComponent from './JumboTronComponent';
import Products from './Products';

// This is the root component of your application.
// Currently, it is only rendering the JumboTronComponent.
class App extends Component {
  render() {        
    return (
      <div>
        {/* We self-close the component since we aren't passing children text here yet */}
        <JumboTronComponent>
          This is a simple hero unit, a simple jumbotron-style component for 
          calling extra attention to featured content or information.
        </JumboTronComponent>
        <Products />     
      </div>
    );
  }
}

export default App;


/* ==========================================================================
   NOTE FOR CLASSMATES: The code below is commented out in your original file,
   but here is how it works for your reference when switching features:
   ========================================================================== */

// import React, { Component } from 'react';
// import Products from './Products';
// import { Button } from 'react-bootstrap';
// import Rating from './Rating';

// class App extends Component {
//   render() {
//     // A local boolean flag used to demonstrate conditional prop disabling
//     // const isValid = true;

//     return (
//       <div>
//         {/* Basic JSX elements */}
//         {/* <h1>Hello, React!</h1> */}
//         {/* <p>Welcome to your first React application.</p> */}
//         
//         {/* Rendering the Products list component */}
//         {/* <Products /> */}
//         
//         {/* React-Bootstrap Buttons demonstrating variant styles and disabled states */}
//         {/* <Button variant='danger'>Default</Button> */}
//         {/* <Button variant='primary' disabled>Default</Button> */}
//         {/* Using a logical NOT (!) operator to toggle the disabled state based on 'isValid' */}
//         {/* <Button variant='primary' disabled={!isValid}>Default</Button> */}
//         
//         {/* Hardcoding static numeric strings into the 'rating' prop to test the Rating component layout */}
//         <Rating rating="1"/>
//         <Rating rating="2"/>
//         <Rating rating="3"/>
//         <Rating rating="4"/>
//         <Rating rating="5"/>
//       </div>
//     );
//   }
// }

// export default App;