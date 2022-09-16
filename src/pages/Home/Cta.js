import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import {Link} from 'react-router-dom';


const Cta = () => {
  return (
    <React.Fragment>
      <section className="section bg-light">
        <Container className="container">
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="text-center">
                <h2 className="text-primary mb-4">현재 수집된  <span className="text-warning fw-bold">5,000+</span> 최신 직무</h2>
                <p className="text-muted">이력서를 빠르게 작성해서 적합하는 직무를 지원하세요.</p>
                <div className="mt-4 pt-2">
                  <Link to="#" className="btn btn-primary btn-hover">이력서 작성<i className="uil uil-rocket align-middle ms-1"></i></Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Cta;
