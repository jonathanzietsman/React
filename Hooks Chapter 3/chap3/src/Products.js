import React from 'react';

function Products() {
    // Array of mock product data
    const products = ["Learning React", "Pro React", "Beginning React", "React for Dummies"];
    
    // Use .map() to loop through the products array and transform each string into a <li> element.
    // The 'key' prop helps React uniquely identify which items have changed, been added, or removed.
    const listProducts = products.map((product) =>
        <li key={product.toString()}>{product}</li>
    );

    return (
        <div>
            {/* Render the dynamically generated list of product elements */}
            <ul>{listProducts}</ul>
        </div>
    );
}

export default Products;