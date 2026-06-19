// Beginning React (Greg Lim) — Chapter 11: Redux with React
import { connect } from "react-redux";
import Cart from "./Cart";

// mapStateToProps: Subscribes to the Redux store updates. 
// It picks which slices of Redux state this component needs and maps them to component props.
function mapStateToProps(state) {
    return {
        totalCost: state.totalCost,
        productCart: state.productCart
    };
}

// mapDispatchToProps: Provides callback functions that dispatch actions to the reducer.
// These functions will be accessible inside the UI component via `this.props`.
function mapDispatchToProps(dispatch) {
    return {
        // Dispatches an action to add a product to the cart
        onAddProduct: (productName, productPrice) => dispatch({
            type: "addProduct",
            productData: {
                productName: productName,
                productPrice: productPrice
            }
        }),
        // Dispatches an action to delete a specific product from the cart
        onDeleteProduct: (productData) => dispatch({
            type: "deleteProduct",
            productData: productData
        })
    };
}

// Higher-order component: connect() links the Cart component to the Redux store.
// Cart now receives state variables and dispatch functions as props.
var connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);

export default connectedComponent;