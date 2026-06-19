import React from 'react';
import Rating from './Rating';
import { Row, Col, Image } from 'react-bootstrap';

/**
 * Product Component: Presentation/Dumb component tasked with layout 
 * formatting for individual products sent via standard data props.
 */
const Product = (props) => {
  return (
    <div>
      {/* Row sets up the flex container; g-3 handles grid item spacing gap */}
      <Row className="align-items-center g-3">

        {/* Column auto-adjusts size according to the content size */}
        <Col xs="auto">
          <Image
            width={64}
            height={64}
            src={props.data.imageUrl}
            alt="Image"
            rounded // Adds border radius curves to image
          />
        </Col>

        {/* Dynamic Column fills out the rest of the available row width space */}
        <Col>
          <h5 className="mb-1">{props.data.productName}</h5>

          <div className="text-muted small mb-1">
            {props.data.releasedDate}
          </div>

          {/* Child Component Interaction: Prop forwarding down to Rating setup */}
          <Rating
            rating={props.data.rating}
            numOfReviews={props.data.numOfReviews}
          />

          <p className="mb-0 mt-2">
            {props.data.description}
          </p>
        </Col>

      </Row>
    </div>
  );
};

export default Product;