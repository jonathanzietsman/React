import React from 'react';
import Rating from './Rating';
import { Row, Col, Image } from 'react-bootstrap';

const Product = (props) => {
  return (
    <div>
      {/* Bootstrap Grid Layout:
          align-items-center: Vertically centers the column items
          g-3: Sets horizontal and vertical gap spacing between columns
      */}
      <Row className="align-items-center g-3">

        {/* xs="auto": This column scales perfectly to match the exact size of the image inside it */}
        <Col xs="auto">
          <Image
            width={64}
            height={64}
            src={props.data.imageUrl} // Accesses the URL passed via the parent array configuration
            alt="Image"
            rounded                  // Softly rounds image corners
          />
        </Col>

        {/* Regular Col: Expands natively to fill the remainder of the horizontal space */}
        <Col>
          {/* Product heading with margin-bottom utility applied */}
          <h5 className="mb-1">{props.data.productName}</h5>

          {/* Muted and downscaled layout text for timestamps */}
          <div className="text-muted small mb-1">
            {props.data.releasedDate}
          </div>

          {/* Passing state down to a nested child component:
              The Rating component expects numeric rating scales and review volumes
          */}
          <Rating
            rating={props.data.rating}
            numOfReviews={props.data.numOfReviews}
          />

          {/* Product description paragraph with specific top/bottom margin rules */}
          <p className="mb-0 mt-2">
            {props.data.description}
          </p>
        </Col>

      </Row>
    </div>
  );
};

export default Product;