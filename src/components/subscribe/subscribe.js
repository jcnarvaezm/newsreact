import React from 'react';
import { Row, Col, Button } from 'emerald-ui/lib/';

const Subscribe = () => {
  return (
    <section className="banner">
      <Row className="container">
        <Col xs={12} sm={6} className="banner-suscribe-text container">
          <h2>Subscribe to our newsletter.</h2>
          <p>
            Subscribe to our newsletter to receive weekly digests of the best
            and most ground-breaking news. Also receive a discount on your
            monthly subscription.
          </p>
          <Button className="btn-subscribe">
            <span>Subscribe</span>
          </Button>
        </Col>
      </Row>
    </section>
  );
};

export default Subscribe;
