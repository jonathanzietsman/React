import React from 'react';
import Rating from './Rating';
import { Row, Col, Image } from 'react-bootstrap';

const Product = (props) => {
  return (
    <div>
      <Row className="align-items-center g-3">

        <Col xs="auto">
          <Image
            width={64}
            height={64}
            src={props.data.imageUrl}
            alt="Image"
            rounded
          />
        </Col>

        <Col>
          <h5 className="mb-1">{props.data.productName}</h5>

          <div className="text-muted small mb-1">
            {props.data.releasedDate}
          </div>

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