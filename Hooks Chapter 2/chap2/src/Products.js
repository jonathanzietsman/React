import React from 'react';

function Products(){
    // Mock data: An array of product titles
    const products = ["Learning React", "Pro React", "Beginning React", "React for Dummies"];
    
    // Mapping over the products array to dynamically create an array of <li> elements
    const listProducts = products.map((product) =>
        // The 'key' prop helps React identify which items have changed, been added, or been removed.
        <li key = {product.toString()}>{product}</li>
    );

    return(
        <div>
            {/* Rendering the dynamically generated list of products inside an unordered list */}
            <ul>{listProducts}</ul>
        </div>
    );
}

export default Products;