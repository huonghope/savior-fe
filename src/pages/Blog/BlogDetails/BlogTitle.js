import React from 'react';
import {Col, Row} from 'reactstrap';

const BlogTitle = () => {
  return (
    <React.Fragment>
      <Row className="justify-content-center">
        <Col lg={7}>
          <div className="text-center mb-5">
            <p className="text-danger fw-semibold mb-2">Blog</p>
            <h3>Blog페이지에서 많은 좋은 정보를 참고하십시오.</h3>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default BlogTitle;
