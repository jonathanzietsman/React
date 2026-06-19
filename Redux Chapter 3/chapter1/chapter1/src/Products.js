// Beginning React (Greg Lim) — Chapter 3: Rendering Lists (from Chapter 2)
// Kept here for reference — the Rating component is the focus of this chapter.

import React, { Component } from 'react';

class Products extends Component {

    render() {
        const products = ['Learning React',
            'Pro React',
            'Beginning React'
        ];
        const listProducts = products.map ( (product) => <li key = {product.toString () } > {product} </li>
        );

        return(
            <div>
                <ul>{listProducts}</ul>
            </div>
        );
    }
}

export default Products;
