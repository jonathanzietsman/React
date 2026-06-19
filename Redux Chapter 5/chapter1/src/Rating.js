import React, { Component } from "react";
import { IoIosStar, IoIosStarOutline } from "react-icons/io"; // Importing star icons from react-icons package

class Rating extends Component {
	constructor(props) {
		super(props);
		// KEY CONCEPT: Props are read-only! To change the rating when clicked,
		// we copy the initial prop value into the component's internal 'state'.
		this.state = { rating: parseInt(this.props.rating, 10) };
	}

	// Handler function that updates our state with the new rating number when a star is clicked.
	handleClick(ratingValue) {
		this.setState({ rating: ratingValue });
	}

	render() {
		return (
			// Applying our inline styling object declared at the bottom of the file
			<div style={styles.starStyle}>
				<h1>Rating: {this.state.rating}</h1>

				{/* STAR RENDERING LOGIC:
                   We repeat this ternary condition for stars 1 through 5.
                   If current state rating is greater than or equal to the target value, show filled star. 
                   Otherwise, show an empty star outline.
                   
                   IMPORTANT: .bind(this, X) ensures that when the function executes on click, 
                   it knows exactly what 'this' refers to, and passes 'X' as the ratingValue argument.
                */}
				{this.state.rating >= 1 ? (
					<IoIosStar onClick={this.handleClick.bind(this, 1)} />
				) : (
					<IoIosStarOutline onClick={this.handleClick.bind(this, 1)} />
				)}

				{this.state.rating >= 2 ? (
					<IoIosStar onClick={this.handleClick.bind(this, 2)} />
				) : (
					<IoIosStarOutline onClick={this.handleClick.bind(this, 2)} />
				)}

				{this.state.rating >= 3 ? (
					<IoIosStar onClick={this.handleClick.bind(this, 3)} />
				) : (
					<IoIosStarOutline onClick={this.handleClick.bind(this, 3)} />
				)}

				{this.state.rating >= 4 ? (
					<IoIosStar onClick={this.handleClick.bind(this, 4)} />
				) : (
					<IoIosStarOutline onClick={this.handleClick.bind(this, 4)} />
				)}

				{this.state.rating >= 5 ? (
					<IoIosStar onClick={this.handleClick.bind(this, 5)} />
				) : (
					<IoIosStarOutline onClick={this.handleClick.bind(this, 5)} />
				)}

				{/* Displaying raw number of reviews next to the stars */}
				{this.props.numOfReviews}
			</div>
		);
	}
}

export default Rating;

// A simple JavaScript styling object used for React inline styles
const styles = {
	starStyle: {
		color: "yellow", // Colors the react-icons SVGs yellow
	},
};
