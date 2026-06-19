// Beginning React (Greg Lim) — Chapter 4: Parent Component with Mock Data
// Products holds the data array and passes each item down to a Product child via props.

import React, { Component } from 'react';
import Product from './Product'; // Import the child item component

class Products extends Component {

    // Declare an uninitialized class property to hold our array of products
    products;

    // Constructor runs automatically once when an instance of this component is created
    constructor(props){
      super(props); // Essential: Calls the parent Component constructor to initialize 'this'
      
      // Load mock product data directly into our class property during instantiation
      this.products = this.getProducts();
    }

    // A helper method simulating an API fetch or database call
    // Returns an array containing product objects
    getProducts() {
      return [
      { 
          imageUrl: "http://loremflickr.com/150/150?random=1",
          productName: "Product 1",
          releasedDate: "May 31, 2016", // Note: Spelled 'releasedDate' here, but 'releaseDate' in Product.js (Bug alert!)
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",        
          rating: 4,
          numOfReviews: 2
      },
      { 
          imageUrl: "http://loremflickr.com/150/150?random=2",
          productName: "Product 2",
          releasedDate: "October 31, 2016",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",        
          rating: 2,
          numOfReviews: 12          
      },
      { 
          imageUrl: "http://loremflickr.com/150/150?random=3",
          productName: "Product 3",
          releasedDate: "July 30, 2016",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",        
          rating: 5,
          numOfReviews: 2
      }];
  }    
    
  render() {    
    // 1. .map() loops through each JavaScript object inside this.products.
    // 2. For every item, it returns an individual <Product /> component instance.
    const listProducts = this.products.map((product) => 
        // 'key' is crucial for React's reconciliation engine to efficiently track, update, or reorder elements.
        // 'data' passes down the entire product object into the child via custom properties (props).
        <Product key={product.productName} data={product} />
    );

    return (
      <div>
        {/* Render the dynamically generated array of React elements inside an un-ordered list */}
        <ul>{listProducts}</ul>     
      </div>
    );
  }
}

export default Products;