// Beginning React (Greg Lim) — Chapter 4: Child Component Receiving Props
// Product displays one item. It receives all product fields through this.props.data.

import React, { Component } from 'react'
import Rating from './Rating'; // Import the reusable star rating component

class Product extends Component {
    render() {
        return (
            // Flexbox container layout: Places the thumbnail image on the left, details text on the right.
            // Double curly braces are used because we are passing a JavaScript object into the style attribute.
            <div style={{ display: 'flex', gap: '1rem' }}>
                
                {/* Product Thumbnail Image */}
                <img
                    width={64}
                    height={64}
                    src={this.props.data.imageUrl} // Accessing the image url from parent-provided props
                    alt="Generic placeholder"
                />
                
                {/* Product Details Area */}
                <div style={{ flex: 1 }}> {/* flex: 1 allows this text container to take up remaining available space */}
                    <h5>{this.props.data.productName}</h5>
                    
                    {/* Render the release date string */}
                    {this.props.data.releasedDate} 
                    
                    {/* Rating is a reusable child component.
                      We cherry-pick the 'rating' number and 'numOfReviews' out of our object 
                      and pass them forward into the Rating component as fresh props.
                    */}
                    <Rating 
                        rating={this.props.data.rating}
                        numOfReviews={this.props.data.numOfReviews}
                    />
                    
                    {/* Product Paragraph Description */}
                    <p>{this.props.data.description}</p>
                </div>
            </div>
        );
    }
}

export default Product;