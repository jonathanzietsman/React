// Beginning React (Greg Lim) — Chapter 4: Rating with Inline Styles
// Same star-rating logic as Chapter 3, now styled and showing review count.

import React, { Component } from 'react';
// Import filled and outlined star SVG icons from the popular 'react-icons' package
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';

class Rating extends Component {
    
    constructor(props) {
        super(props);
        // Local component State initialization.
        // We take the initial value provided by the parent prop (this.props.rating) 
        // and copy it into local state so this component can change it independently later.
        this.state = { rating: this.props.rating };
    }

    // Click handler method triggered when a star is selected
    handleClick(ratingValue) {
        // updates local state asynchronously, forcing React to re-trigger the render() method
        this.setState({ rating: ratingValue });
    }
    
    render() {
        return (
            // Apply CSS styles using a reference to our plain JavaScript styles object below
            <div style={styles.starStyle}>
                
                {/* Display the current numerical state score */}
                <h1>Rating: {this.state.rating}</h1>
                
                {/* Conditional (Ternary) Operators for Stars 1 through 5.
                  Syntax: (Condition) ? (Execute if True) : (Execute if False)
                  
                  .bind(this, X) ensures that when handleClick is fired, 'this' context remains accurate 
                  and the correct parameter integer 'X' is passed to the method.
                */}
                
                {/* Star 1 */}
                { this.state.rating >= 1 ? (
                    <IoIosStar onClick={this.handleClick.bind(this,1)} />
                ) : (
                    <IoIosStarOutline onClick={this.handleClick.bind(this,1)} />
                )}
                
                {/* Star 2 */}
                { this.state.rating >= 2 ? (
                    <IoIosStar onClick={this.handleClick.bind(this,2)} />
                ) : (
                    <IoIosStarOutline onClick={this.handleClick.bind(this,2)} />
                )}
                
                {/* Star 3 */}
                { this.state.rating >= 3 ? (
                    <IoIosStar onClick={this.handleClick.bind(this,3)} />
                ) : (
                    <IoIosStarOutline onClick={this.handleClick.bind(this,3)} />
                )}
                
                {/* Star 4 */}
                { this.state.rating >= 4 ? (
                    <IoIosStar onClick={this.handleClick.bind(this,4)} />
                ) : (
                    <IoIosStarOutline onClick={this.handleClick.bind(this,4)} />
                )}
                
                {/* Star 5 */}
                { this.state.rating >= 5 ? (
                    <IoIosStar onClick={this.handleClick.bind(this,5)} />
                ) : (
                    <IoIosStarOutline onClick={this.handleClick.bind(this,5)} />
                )}
                
                {/* Output the number of reviews directly adjacent to the rendered star block */}
                {this.props.numOfReviews}
            </div>
        );
    }
}

export default Rating;

// Inline styling dictionary
// React style objects use camelCase properties rather than traditional kebab-case CSS strings (e.g., color, backgroundColor).
const styles = {
    starStyle: {
        color: 'blue', // Colors the SVG icon nodes blue
    }
}