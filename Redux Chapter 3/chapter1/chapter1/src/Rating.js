// Beginning React (Greg Lim) — Chapter 3: Props & State
// Props are read-only inputs from a parent. State is mutable data owned by this component.

import React, { Component } from 'react';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';

class Rating extends Component {
    
    // constructor runs once when the component is created.
    // We copy the initial rating from props into state so clicks can update it.
    constructor(props) {
        super(props);
        this.state = { rating: this.props.rating };
    }

    // setState triggers a re-render with the new rating value.
    handleClick(ratingValue) {
        this.setState({ rating: ratingValue });
    }
    
    render() {
        return (
            <div>
                <h1>Rating: {this.state.rating}</h1>
                {/* For each star (1–5): show filled star if rating >= value, else outline.
                    .bind(this, N) passes N as the first argument when the star is clicked. */}
                { this.state.rating >= 1 ? (
                    <IoIosStar onClick={this.handleClick.bind(this,1)} />
                ) : (
                    <IoIosStarOutline onClick={this.handleClick.bind(this,1)} />
                )}
                { this.state.rating >= 2 ? (
                    <IoIosStar onClick={this.handleClick.bind(this,2)} />
                ) : (
                    <IoIosStarOutline onClick={this.handleClick.bind(this,2)} />
                )}
                { this.state.rating >= 3 ? (
                    <IoIosStar onClick={this.handleClick.bind(this,3)} />
                ) : (
                    <IoIosStarOutline onClick={this.handleClick.bind(this,3)} />
                )}
                { this.state.rating >= 4 ? (
                    <IoIosStar onClick={this.handleClick.bind(this,4)} />
                ) : (
                    <IoIosStarOutline onClick={this.handleClick.bind(this,4)} />
                )}
                { this.state.rating >= 5 ? (
                    <IoIosStar onClick={this.handleClick.bind(this,5)} />
                ) : (
                    <IoIosStarOutline onClick={this.handleClick.bind(this,5)} />
                )}
            </div>
        );

    }

}

export default Rating;
