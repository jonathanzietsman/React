import React from "react";
import Product from "./Product";

function Products() {
  // Mock data function mimic fetch endpoints structure
  const getProducts = () => {
    return [
      /* Currently commented out mock products array list data structure
      {
          imageUrl: "/public/courage-man-jump-through-gap-hill-business-concept-idea_1323-262.avif",
          productName: "Product 1",
          releasedDate: "May 31, 2016",
          description: "Lorem ipsum dolor sit amet...",
          rating: 4,
          numOfReviews: 2
      },
      ... 
      */
    ];
  };

  // Execute function retrieval to pull catalog layout array
  const products = getProducts();

  // Maps across array objects to translate dataset maps directly into functional React Components
  // Note: key attribute is critical for React Virtual DOM reconciliation performance algorithms
  const listProducts = products.map((product) => (
    <Product key={product.productName} data={product} />
  ));

  return (
    <div>
      {/* Ternary operator executing dynamic evaluation criteria conditional UI checking:
          If components map is populated (> 0), execute list render engine output.
          Otherwise fall back gracefully to display "No Products to display" notification.
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