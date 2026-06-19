import React, { useState } from "react";
// Import filled and outline star icons from react-icons library
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

function Rating(props) {
  {/* Initialize internal component state with the initial rating passed down from parent props.
    Using state allows users to dynamically update the star display on click.
  */}
  const [rating, setRating] = useState(props.rating);

  return (
    <div>
      {/* Displays current numerical rating score */}
      <h1>Rating: {rating}</h1>

      {/* Conditional Ternary Blocks (1 through 5):
        Checks if the current state value satisfies the index threshold.
        Renders a filled star (IoIosStar) if true, or an empty star (IoIosStarOutline) if false.
        An onClick handler updates the state dynamically to match the selected star index.
      */}

      {/* Star 1 */}
      {rating >= 1 ? (
        <IoIosStar style={styles.starStyle} onClick={() => setRating(1)} />
      ) : (
        <IoIosStarOutline
          style={styles.starStyle}
          onClick={() => setRating(1)}
        />
      )}

      {/* Star 2 */}
      {rating >= 2 ? (
        <IoIosStar style={styles.starStyle} onClick={() => setRating(2)} />
      ) : (
        <IoIosStarOutline
          style={styles.starStyle}
          onClick={() => setRating(2)}
        />
      )}

      {/* Star 3 */}
      {rating >= 3 ? (
        <IoIosStar style={styles.starStyle} onClick={() => setRating(3)} />
      ) : (
        <IoIosStarOutline
          style={styles.starStyle}
          onClick={() => setRating(3)}
        />
      )}

      {/* Star 4 */}
      {rating >= 4 ? (
        <IoIosStar style={styles.starStyle} onClick={() => setRating(4)} />
      ) : (
        <IoIosStarOutline
          style={styles.starStyle}
          onClick={() => setRating(4)}
        />
      )}

      {/* Star 5 */}
      {rating >= 5 ? (
        <IoIosStar style={styles.starStyle} onClick={() => setRating(5)} />
      ) : (
        <IoIosStarOutline
          style={styles.starStyle}
          onClick={() => setRating(5)}
        />
      )}

      {/* Displays the total count of reviews beside the stars */}
      <span>{props.numOfReviews}</span>
    </div>
  );
}

export default Rating;

// Localized JavaScript Style Object for individual icon rendering configuration
const styles = {
  starStyle: {
    color: "orange",
  },
};