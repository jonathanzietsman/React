import React, { useState } from "react";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

function Rating(props) {
  const [rating, setRating] = useState(props.rating);

  /* Removed the style from the container: <div> no longer has style, so the <h1> text will return to its default color
        Applied style to components: style attribute now added individually to every star icon */
  return (
    <div>
      <h1>Rating: {rating}</h1>
      {rating >= 1 ? (
        <IoIosStar style={styles.starStyle} onClick={() => setRating(1)} />
      ) : (
        <IoIosStarOutline
          style={styles.starStyle}
          onClick={() => setRating(1)}
        />
      )}
      {rating >= 2 ? (
        <IoIosStar style={styles.starStyle} onClick={() => setRating(2)} />
      ) : (
        <IoIosStarOutline
          style={styles.starStyle}
          onClick={() => setRating(2)}
        />
      )}
      {rating >= 3 ? (
        <IoIosStar style={styles.starStyle} onClick={() => setRating(3)} />
      ) : (
        <IoIosStarOutline
          style={styles.starStyle}
          onClick={() => setRating(3)}
        />
      )}
      {rating >= 4 ? (
        <IoIosStar style={styles.starStyle} onClick={() => setRating(4)} />
      ) : (
        <IoIosStarOutline
          style={styles.starStyle}
          onClick={() => setRating(4)}
        />
      )}
      {rating >= 5 ? (
        <IoIosStar style={styles.starStyle} onClick={() => setRating(5)} />
      ) : (
        <IoIosStarOutline
          style={styles.starStyle}
          onClick={() => setRating(5)}
        />
      )}

      <span>{props.numOfReviews}</span>
    </div>
  );
}

export default Rating;

const styles = {
  starStyle: {
    color: "orange",
  },
};
