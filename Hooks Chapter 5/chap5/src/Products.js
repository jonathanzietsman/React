import React from "react";
import Product from "./Product";

function Products() {
  // A mock data generator function intended to mimic data fetching
  const getProducts = () => {
    return [
      /* Expected Object Schema Example:
         {
             imageUrl: "/public/courage-man-jump-through-gap-hill-business-concept-idea_1323-262.avif",
             productName: "Product 1",
             releasedDate: "May 31, 2016",
             description: "Lorem ipsum...",
             rating: 4,
             numOfReviews: 2
         }
      */
    ];
  };

  // Extract the generated products array
  const products = getProducts();

  {/* ARRAY MAPPING:
      Transforms the raw data array into an array of React elements.
      The 'key' prop is required by React's Virtual DOM to efficiently 
      track changes, updates, and removals within dynamic lists.
  */}
  const listProducts = products.map((product) => (
    <Product key={product.productName} data={product} />
  ));

  return (
    <div>
      {/* CONDITIONAL RENDERING (Ternary Operator):
          Condition ? 'Executed if True' : 'Executed if False'

          If listProducts contains mapped elements, render the list.
          If listProducts is empty (length is 0), render the fallback notice message.
      */}
      {listProducts.length > 0 ? (
        <ul>{listProducts}</ul>
      ) : (
        <ul>No Products to display</ul>
      )}
    </div>
  );
}

export default Products;