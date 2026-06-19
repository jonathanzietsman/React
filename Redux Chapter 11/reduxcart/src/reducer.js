// The Reducer function determines changes to an application's state.
// It takes the current state and an action, then returns the new state.
function cartReducer(state, action) {
    // Initial State: If the app is starting up and state is undefined,
    // return the default starting structure.
    if (state === undefined) {
        return {
            totalCost: 0,
            productCart: []
        };
    }

    // Evaluate the action type dispatched by the application
    switch (action.type) {
        case "addProduct":
            // Always return a new object to maintain immutability.
            return {
                ...state, // Copy existing state properties
                // Update totalCost (using parseInt to avoid string concatenation from text inputs)
                totalCost: state.totalCost + parseInt(action.productData.productPrice),
                // Concat returns a new array, appending the new product without mutating the original array
                productCart: state.productCart.concat({
                    productName: action.productData.productName,
                    productPrice: action.productData.productPrice
                })
            };
            
        case "deleteProduct":
            // Filter creates a new array excluding the product that matches the deleted item's name
            const updatedArray = state.productCart.filter(product => product.productName !== action.productData.productName);
            return {
                ...state, // Copy existing state properties
                // Subtract the price of the removed item from the total cost
                totalCost: state.totalCost - parseInt(action.productData.productPrice),
                // Assign the newly filtered array to productCart
                productCart: updatedArray
            };
            
        default:
            // If the action type is not recognized, return the current state unchanged
            return state;
    }
}

export default cartReducer;