import React, { useState } from "react";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

function Rating(props) {
  // REACT STATE HOOK (useState):
  // Initializes a 'rating' state using the initial value passed via props.
  // 'setRating' is the dispatcher function used to re-render the view when changed.
  const [rating, setRating] = useState(props.rating);

  return (
    <div>
      {/* Dynamic textual layout displaying the current value of state */}
      <h1>Rating: {rating}</h1>

      {/* STAR 1 INTERACTION
          If rating state is >= 1, show a filled star. Otherwise, show an empty star outline.
          onClick updates the rating state value to 1, causing an automated re-render.
      */}
      {rating >= 1 ? (
        <IoIosStar style={styles.starStyle} onClick={() => setRating(1)} />
      ) : (
        <IoIosStarOutline
          style={styles.starStyle}
          onClick={() => setRating(1)}
        />
      )}

      {/* STAR 2 INTERACTION */}
      {rating >= 2 ? (
        <IoIosStar style={styles.starStyle} onClick={() => setRating(2)} />
      ) : (
        <IoIosStarOutline
          style={styles.starStyle}
          onClick={() => setRating(2)}
        />
      )}

      {/* STAR 3 INTERACTION */}
      {rating >= 3 ? (
        <IoIosStar style={styles.starStyle} onClick={() => setRating(3)} />
      ) : (
        <IoIosStarOutline
          style={styles.starStyle}
          onClick={() => setRating(3)}
        />
      )}

      {/* STAR 4 INTERACTION */}
      {rating >= 4 ? (
        <IoIosStar style={styles.starStyle} onClick={() => setRating(4)} />
      ) : (
        <IoIosStarOutline
          style={styles.starStyle}
          onClick={() => setRating(4)}
        />
      )}

      {/* STAR 5 INTERACTION */}
      {rating >= 5 ? (
        <IoIosStar style={styles.starStyle} onClick={() => setRating(5)} />
      ) : (
        <IoIosStarOutline
          style={styles.starStyle}
          onClick={() => setRating(5)}
        />
      )}

      {/* Text display container showing the total number of reviews */}
      <span>{props.numOfReviews}</span>
    </div>
  );
}

export default Rating;

// Inline Javascript Style Object applied to individual React-Icon components
const styles = {
  starStyle: {
    color: "orange",
  },
};