import React from 'react';
import {Container, Row} from 'reactstrap';
import {Link} from 'react-router-dom';

const Cta = () => {
  return (
    <React.Fragment>
      <section className="section bg-light">
        <Container>
          <Row className="justify-content-center">
            <div className="section-title text-center">
              <h3 className="title mb-4 pb-2">직원들에 대한 모든 것을 한 곳에서 볼 수 있습니다.</h3>
              <p className="para-desc text-muted mx-auto">취준생들에게는 취업할 수 있도록 도와주고, 기업들은 인재를 채용할 수 있는 <br></br>도와주는 일자리 프로그램이 새롭게</p>
              <div className="mt-4">
                <Link to="#" className="btn btn-primary btn-hover mt-2"><i className="uil uil-rocket me-1"></i> Get Started Now</Link>
                <Link to="#" className="btn btn-outline-primary btn-hover ms-sm-1 mt-2"><i className="uil uil-capsule me-1"></i> Free Trial</Link>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Cta;
