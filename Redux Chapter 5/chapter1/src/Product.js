import React, { Component } from 'react'
import Rating from './Rating';

class Product extends Component {
    render() {
        return (
            // Outermost layout container using Inline CSS Flexbox to align elements horizontally
            // gap: '1rem' creates a dynamic space (~16px) between the image child and text child
            <div style={{ display: 'flex', gap: '1rem' }}>
                
                {/* Product Image: Uses fixed sizes to maintain a clean card/list alignment */}
                <img
                    width={64}
                    height={64}
                    src={this.props.data.imageUrl}
                    alt="Generic placeholder"
                />
                
                {/* Text Content Container: flex: 1 tells this div to stretch and occupy all remaining width */}
                <div style={{ flex: 1 }}>
                    {/* Data is passed down from the parent (Products.js) via the 'data' prop object */}
                    <h5>{this.props.data.productName}</h5>
                    
                    {this.props.data.releasedDate}
                    
                    {/* Nesting the Rating component and feeding it specific properties from our data object */}
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