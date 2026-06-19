import React from 'react';
import Rating from './Rating';
// Import layout components from React-Bootstrap
import { Row, Col, Image } from 'react-bootstrap';

const Product = (props) => {
  return (
    <div>
      {/* Row sets up a flexbox container.
        'align-items-center' vertically centers the content.
        'g-3' sets standard gutter spacing between columns.
      */}
      <Row className="align-items-center g-3">

        {/* Left Column: Image wrapper. 'xs="auto"' ensures the column only shrinks to the size of its content */}
        <Col xs="auto">
          <Image
            width={64}
            height={64}
            src={props.data.imageUrl}
            alt="Image"
            rounded // Adds rounded corners to the image borders
          />
        </Col>

        {/* Right Column: Dynamic flex column filling up the remaining horizontal space */}
        <Col>
          {/* Product Name Title with a small bottom margin */}
          <h5 className="mb-1">{props.data.productName}</h5>

          {/* Subtext container for the release date */}
          <div className="text-muted small mb-1">
            {props.data.releasedDate}
          </div>

          {/* Nested Rating Component, forwarding specific data properties down */}
          <Rating
            rating={props.data.rating}
            numOfReviews={props.data.numOfReviews}
          />

          {/* Product Description text block */}
          <p className="mb-0 mt-2">
            {props.data.description}
          </p>
        </Col>

      </Row>
    </div>
  );
};

export default Product;