import React, { Component } from "react";

class AddProduct extends Component {
    // Local state handles form inputs dynamically before submission.
    // This keeps the input fields responsive and decoupled from Redux until the submit button is clicked.
    state = {
        productName: "",
        productPrice: 0
    }

    // Keeps local state updated whenever user types into the Product Name field
    productNameChangedHandler = (event) => {
        this.setState({ productName: event.target.value });
    }

    // Keeps local state updated whenever user alters the Product Price field
    productPriceChangedHandler = (event) => {
        this.setState({ productPrice: event.target.value });
    }

    render() {
        return (
            <div className="container">
                {/* Controlled Input for Product Name */}
                <input
                    type="text"
                    placeholder="Product Name"
                    onChange={this.productNameChangedHandler}
                    value={this.state.productName}
                />
                
                {/* Controlled Input for Product Price */}
                <input
                    type="number"
                    placeholder="Product Price"
                    onChange={this.productPriceChangedHandler}
                    value={this.state.productPrice}
                />
                
                {/* Submit button sends local state values up to Redux via props function */}
                <button className="buttons"
                    onClick={() => {
                        // Triggers the onAddProduct Redux dispatch mapped in App.js -> passed through Cart.js
                        this.props.addProduct(this.state.productName, this.state.productPrice);
                        
                        // Optional: Reset local input fields after adding product
                        this.setState({ productName: "", productPrice: 0 });
                    }}>
                    Add Product
                </button>
            </div>
        );
    }
};

export default AddProduct;