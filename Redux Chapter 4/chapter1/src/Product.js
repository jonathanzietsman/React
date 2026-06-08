import React, { Component } from 'react'
import Rating from './Rating';

class Product extends Component {
    render() {
        return (
            // Container using flexbox to arrange items horizontally (side by side)
            // display: 'flex' makes children line up horizontally
            // gap: '1rem' adds space between image and text (1rem = ~16px)
            <div style={{ display: 'flex', gap: '1rem' }}>
                {/* Product image - fixed size of 64x64 pixels */}
                <img
                    width={64}
                    height={64}
                    src={this.props.data.imageUrl}
                    alt="Generic placeholder"
                />
                {/* Container for product details that takes remaining space */}
                {/* flex: 1 means this div grows to fill available space */}
                <div style={{ flex: 1 }}>
                    <h5>{this.props.data.productName}</h5>
                    {this.props.data.releaseDate}
                    <Rating 
                        rating={this.props.data.rating}
                        numOfReviews={this.props.data.numOfReviews}
                    />
                    <p>{this.props.data.description}</p>
                </div>
            </div>
        );
    }
}

export default Product;