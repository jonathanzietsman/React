import React, { Component } from "react";
import AddProduct from "./AddProduct";
import { Table } from "reactstrap"; // Utilizing Reactstrap for clean table layout

class Cart extends Component {
    render() {
        return (
            <div className="container">
                {/* Pass down the Redux action onAddProduct as a prop named 'addProduct' 
                  so the child component (AddProduct) can trigger it.
                */}
                <AddProduct addProduct={this.props.onAddProduct} />
                
                {/* Product Inventory Display Table */}
                <Table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>#</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Map over the productCart array received from the Redux store props */}
                        {this.props.productCart.map((productData) => (
                            <tr key={productData.productName}>
                                <td>{productData.productName}</td>
                                <td>{productData.productPrice}</td>
                                {/* Click handler triggers the onDeleteProduct function passed from Redux props */}
                                <td
                                    style={{ cursor: "pointer", color: "red" }} // Added explicit style for UX
                                    onClick={() =>
                                        this.props.onDeleteProduct(productData)
                                    }
                                >
                                    Remove
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                
                {/* Display total dynamic cost accumulated from Redux state */}
                <span>Total Amount: {this.props.totalCost}</span>
            </div>
        );
    }
}

export default Cart;