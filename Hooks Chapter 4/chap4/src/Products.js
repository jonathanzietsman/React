import React from 'react';
import Product from './Product';

function Products() {

    // Mock function that returns an array of hardcoded product data objects
    const getProducts = () => {
        return [
            { 
                imageUrl: "/public/courage-man-jump-through-gap-hill-business-concept-idea_1323-262.avif",
                productName: "Product 1",
                releasedDate: "May 31, 2016",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",        
                rating: 4,
                numOfReviews: 2
            },
            { 
                imageUrl: "/public/courage-man-jump-through-gap-hill-business-concept-idea_1323-262.avif",
                productName: "Product 2",
                releasedDate: "October 31, 2016",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",        
                rating: 2,
                numOfReviews: 12          
            },
            { 
                imageUrl: "/public/courage-man-jump-through-gap-hill-business-concept-idea_1323-262.avif",
                productName: "Product 3",
                releasedDate: "July 30, 2016",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",        
                rating: 5,
                numOfReviews: 2
            }];
    }

    // Retrieve the raw products array
    const products = getProducts()

    // Map through the array to transform each raw JavaScript data object into a JSX <Product /> component.
    // We pass a 'key' prop for React's reconciliation engine, and the raw item via the 'data' prop.
    const listProducts = products.map((product) => 
        <Product key={product.productName} data={product} />
    );    
  
    return (
      <div>
          {/* Render the mapped array of Product components inside an unordered list */}
          <ul>{listProducts}</ul>     
      </div>
    );
}

export default Products;