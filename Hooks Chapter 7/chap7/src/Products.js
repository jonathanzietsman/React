import React from "react";
import Product from "./Product";

/**
 * Products Component: Orchestrates the generation of mock product structures.
 */
function Products() {
  
  /**
   * Helper function returning an array containing static local mock object configurations.
   * (Currently empty to demonstrate the fallback empty layout conditional state).
   */
  const getProducts = () => {
    return [
      // Mock objects commented out for empty list evaluation test:
      // {
      //     imageUrl: "/public/...avif",
      //     productName: "Product 1",
      //     ...
      // }
    ];
  };

  const products = getProducts();

  // Map individual configuration payloads directly into organized reusable product templates
  const listProducts = products.map((product) => (
    <Product key={product.productName} data={product} />
  ));

  return (
    <div>
      {/* Ternary Operator Conditional Render Statement:
          Checks if the array contains items. If true, outputs the mapped product list.
          If array is empty, renders the fallback warning message.
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