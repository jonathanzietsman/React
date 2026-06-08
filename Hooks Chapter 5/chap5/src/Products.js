import React from "react";
import Product from "./Product";

function Products() {
  const getProducts = () => {
    return [
      // {
      //     imageUrl: "/public/courage-man-jump-through-gap-hill-business-concept-idea_1323-262.avif",
      //     productName: "Product 1",
      //     releasedDate: "May 31, 2016",
      //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
      //     rating: 4,
      //     numOfReviews: 2
      // },
      // {
      //     imageUrl: "/public/courage-man-jump-through-gap-hill-business-concept-idea_1323-262.avif",
      //     productName: "Product 2",
      //     releasedDate: "October 31, 2016",
      //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
      //     rating: 2,
      //     numOfReviews: 12
      // },
      // {
      //     imageUrl: "/public/courage-man-jump-through-gap-hill-business-concept-idea_1323-262.avif",
      //     productName: "Product 3",
      //     releasedDate: "July 30, 2016",
      //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris. ",
      //     rating: 5,
      //     numOfReviews: 2
      // }
    ];
  };

  const products = getProducts();

  const listProducts = products.map((product) => (
    <Product key={product.productName} data={product} />
  ));

  return (
    <div>
      {/* {listProducts.length > 0 && <ul>{listProducts}</ul>}
        {listProducts.length == 0 && <ul>No Products To Display</ul>} */}
      {listProducts.length > 0 ? (
        <ul>{listProducts}</ul>
      ) : (
        <ul>No Products to display</ul>
      )}
    </div>
  );
}

export default Products;
