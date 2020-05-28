import React from 'react';
import { Row, Col } from 'emerald-ui/lib/';

const Subscribe = () => {
  return (
    <section className="banner">
      <Row>
        <Col xs={12} sm={6}>
          <h2>Subscribe to our newsletter.</h2>
          <p>
            Subscribe to our newsletter to receive weekly digests of the best
            and most ground-breaking news. Also receive a discount on your
            monthly subscription.
          </p>
          <button>Subscribe</button>
        </Col>
      </Row>
    </section>
  );
};
export default Subscribe;
