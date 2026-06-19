import React, { useState } from "react";
// Import Star asset variants from the React Icons collection package
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

/**
 * Rating Component: Displays dynamic interactable star fields.
 * Updates local values instantly on clicking individual star icons.
 */
function Rating(props) {
  // Instantiates local active rating tracker initially set to match the parent component's prop
  const [rating, setRating] = useState(props.rating);

  return (
    <div>
      <h1>Rating: {rating}</h1>
      
      {/* --- Star 1 Calculation Block --- */}
      {/* If rating value is 1 or more, paint a filled star, else show an empty star outline. */}
      {rating >= 1 ? (
        <IoIosStar style={styles.starStyle} onClick={() => setRating(1)} />
      ) : (
        <IoIosStarOutline style={styles.starStyle} onClick={() => setRating(1)} />
      )}

      {/* --- Star 2 Calculation Block --- */}
      {rating >= 2 ? (
        <IoIosStar style={styles.starStyle} onClick={() => setRating(2)} />
      ) : (
        <IoIosStarOutline style={styles.starStyle} onClick={() => setRating(2)} />
      )}

      {/* --- Star 3 Calculation Block --- */}
      {rating >= 3 ? (
        <IoIosStar style={styles.starStyle} onClick={() => setRating(3)} />
      ) : (
        <IoIosStarOutline style={styles.starStyle} onClick={() => setRating(3)} />
      )}

      {/* --- Star 4 Calculation Block --- */}
      {rating >= 4 ? (
        <IoIosStar style={styles.starStyle} onClick={() => setRating(4)} />
      ) : (
        <IoIosStarOutline style={styles.starStyle} onClick={() => setRating(4)} />
      )}

      {/* --- Star 5 Calculation Block --- */}
      {rating >= 5 ? (
        <IoIosStar style={styles.starStyle} onClick={() => setRating(5)} />
      ) : (
        <IoIosStarOutline style={styles.starStyle} onClick={() => setRating(5)} />
      )}

      {/* Displays the total number of reviews written next to the star system */}
      <span>{props.numOfReviews}</span>
    </div>
  );
}

export default Rating;

// Localized style object rules mapping styling across the icon vectors uniformly
const styles = {
  starStyle: {
    color: "orange",
  },
};