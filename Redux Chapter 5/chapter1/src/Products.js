import React, { Component } from 'react';
import Product from './Product';

class Products extends Component {
    // Declaring a class-level variable to store our array data
    products;

    constructor(props){
      super(props);
      // Initialize the array when the component class instance is created
      this.products = this.getProducts();
    }

    // A mock data function simulating an API call or database fetch
    getProducts() {
      return [
      //  { 
      //      imageUrl: "http://loremflickr.com/150/150?random=1",
      //      productName: "Product 1",
      //      releasedDate: "May 31, 2016",
      //      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",        
      //      rating: 4,
      //      numOfReviews: 2
      //  },
      //  { 
      //      imageUrl: "http://loremflickr.com/150/150?random=2",
      //      productName: "Product 2",
      //      releasedDate: "October 31, 2016",
      //      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",        
      //      rating: 2,
      //      numOfReviews: 12          
      //  },
      //  { 
      //      imageUrl: "http://loremflickr.com/150/150?random=3",
      //      productName: "Product 3",
      //      releasedDate: "July 30, 2016",
      //      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",        
      //      rating: 5,
      //      numOfReviews: 2
      //  }
    ];
  }    
    
  render() {    
    // Using JavaScript's .map() loop to convert our raw array objects into an array of UI components.
    // KEY CONCEPT: React requires a unique 'key' prop when rendering lists to keep track of changes efficiently.
    const listProducts = this.products.map((product) => 
        <Product key={product.productName} data={product} />
    );

    return (
      <div>
        {/* CONDITIONAL RENDERING (Ternary Operator Expression)
          Syntax: condition ? run_if_true : run_if_false
          If we have items in our array, show the list. Otherwise, show "No Products..." 
        */}
        {listProducts.length > 0 ? (
          <ul>{listProducts}</ul>
        ) : (
          <ul>No Products to display</ul>
        )}


        {/* ALTERNATIVE CONDITIONAL RENDERING (Short-Circuit Evaluation)
          The code block below does the exact same thing using the logical AND (&&) operator.
          If the first statement evaluates to true, React automatically processes and displays the second part.
        */}
        {/* {listProducts.length > 0 &&
          <ul>{listProducts}</ul>
        }
        {listProducts.length === 0 &&
          <ul>No Products to display</ul>
        }    */}
      </div>
    );
  }
}

export default Products;