import React, { useState } from "react";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

function Rating(props) {
  // Local state tracking system hook initialized with values supplied from parent component props
  const [rating, setRating] = useState(props.rating);

  return (
    <div>
      <h1>Rating: {rating}</h1>
      
      {/* Below contains 5 continuous ternary expressions tracking rendering loops.
          If state evaluation rating values scale index thresholds, render full Star (IoIosStar).
          Otherwise, display the outline container star asset (IoIosStarOutline).
          
          onClick captures individual user overrides to reset rating state index numbers interactively.
      */}
      
      {/* Star Node 1 */}
      {rating >= 1 ? (
        <IoIosStar style={styles.starStyle} onClick={() => setRating(1)} />
      ) : (
        <IoIosStarOutline style={styles.starStyle} onClick={() => setRating(1)} />
      )}
      
      {/* Star Node 2 */}
      {rating >= 2 ? (
        <IoIosStar style={styles.starStyle} onClick={() => setRating(2)} />
      ) : (
        <IoIosStarOutline style={styles.starStyle} onClick={() => setRating(2)} />
      )}
      
      {/* Star Node 3 */}
      {rating >= 3 ? (
        <IoIosStar style={styles.starStyle} onClick={() => setRating(3)} />
      ) : (
        <IoIosStarOutline style={styles.starStyle} onClick={() => setRating(3)} />
      )}
      
      {/* Star Node 4 */}
      {rating >= 4 ? (
        <IoIosStar style={styles.starStyle} onClick={() => setRating(4)} />
      ) : (
        <IoIosStarOutline style={styles.starStyle} onClick={() => setRating(4)} />
      )}
      
      {/* Star Node 5 */}
      {rating >= 5 ? (
        <IoIosStar style={styles.starStyle} onClick={() => setRating(5)} />
      ) : (
        <IoIosStarOutline style={styles.starStyle} onClick={() => setRating(5)} />
      )}

      {/* Review counters layout readout block */}
      <span>{props.numOfReviews}</span>
    </div>
  );
}

export default Rating;

// Standard JavaScript stylesheet objects mapping inline styles properties configurations
const styles = {
  starStyle: {
    color: "orange",
    cursor: "pointer" // Added usability cursor hint pointer configuration implicitly
  },
};