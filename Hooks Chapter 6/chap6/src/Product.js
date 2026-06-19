import React from 'react';
import Rating from './Rating';
import { Row, Col, Image } from 'react-bootstrap';

const Product = (props) => {
  return (
    <div>
      {/* Row handles layout flexbox wrapping. 
          align-items-center: vertically targets middle alignment.
          g-3: Bootstrap gutter shorthand providing spacing gap between columns.
      */}
      <Row className="align-items-center g-3">

        {/* Image Column: Width sizes automatically to snugly fit the media width */}
        <Col xs="auto">
          <Image
            width={64}
            height={64}
            src={props.data.imageUrl} // Dynamic image path reference from props object data
            alt="Image"
            rounded                  // Applies smooth layout border rounding
          />
        </Col>

        {/* Content Column: Automatically stretches to consume remaining grid horizontal space */}
        <Col>
          {/* Product Title Headings */}
          <h5 className="mb-1">{props.data.productName}</h5>

          {/* Muted structural metadata subtitle showing release timelines */}
          <div className="text-muted small mb-1">
            {props.data.releasedDate}
          </div>

          {/* Renders custom dynamic child star rating element.
              Passes state criteria variables downstream.
          */}
          <Rating
            rating={props.data.rating}
            numOfReviews={props.data.numOfReviews}
          />

          {/* Main paragraphs of core contextual product logs descriptions */}
          <p className="mb-0 mt-2">
            {props.data.description}
          </p>
        </Col>

      </Row>
    </div>
  );
};

export default Product;