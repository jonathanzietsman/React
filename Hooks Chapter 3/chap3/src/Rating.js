import React, { useState } from 'react'
// Import filled and outlined star icons from the Ionicons set inside react-icons
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'

function Rating(props) {
    // Initialize component state 'rating' with the value passed down via props.rating
    const [rating, setRating] = useState(props.rating)

    return (
        <div>
            {/* Display the current rating number */}
            <h1>Rating: {rating}</h1>        
            
            {/* 1st Star: Conditional rendering using ternary operators.
                If current rating is 1 or higher, show a filled star. Otherwise, show an outline.
                Clicking the star updates the state to 1. */}
            {rating >= 1 ? ( 
                <IoIosStar onClick={() => setRating(1)}/>     
            ) : (         
                <IoIosStarOutline onClick={() => setRating(1)}/>     
            )}     
            
            {/* 2nd Star: Shows filled if rating is 2 or higher */}
            {rating >= 2 ? ( 
                <IoIosStar onClick={() => setRating(2)}/>     
            ) : (         
                <IoIosStarOutline onClick={() => setRating(2)}/>     
            )} 
            
            {/* 3rd Star: Shows filled if rating is 3 or higher */}
            {rating >= 3 ? ( 
                <IoIosStar onClick={() => setRating(3)}/>     
            ) : (         
                <IoIosStarOutline onClick={() => setRating(3)}/>     
            )} 
            
            {/* 4th Star: Shows filled if rating is 4 or higher */}
            {rating >= 4 ? ( 
                <IoIosStar onClick={() => setRating(4)}/>     
            ) : (         
                <IoIosStarOutline onClick={() => setRating(4)}/>     
            )} 
            
            {/* 5th Star: Shows filled if rating is exactly 5 */}
            {rating >= 5 ? ( 
                <IoIosStar onClick={() => setRating(5)}/>     
            ) : (         
                <IoIosStarOutline onClick={() => setRating(5)}/>     
            )}   

        </div>
    )
}

export default Rating