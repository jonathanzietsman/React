// Beginning React (Greg Lim) — Chapter 2: Rendering Lists
// This component demonstrates how to turn a JavaScript array into a list of UI elements.

import React, { Component } from 'react';

class Products extends Component {

    render() {
        // A plain JavaScript array of strings — our data source.
        const products = ['Learning React',
            'Pro React',
            'Beginning React'
        ];

        // .map() transforms each array item into a JSX <li> element.
        // The 'key' prop helps React identify which list items changed when re-rendering.
        const listProducts = products.map ( (product) => <li key = {product.toString () } > {product} </li>
        );

        return(
            <div>
                {/* Curly braces {} let us embed JavaScript expressions inside JSX. */}
                <ul>{listProducts}</ul>
            </div>
        );
    }
}

export default Products;
