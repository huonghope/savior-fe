import React from 'react';
import {Container, Row, Col, Card, Input} from 'reactstrap';
import {Form} from 'react-bootstrap';
import Countdown from 'react-countdown';
// import Image
import rocketImage from '../../../assets/images/animat-rocket-color.gif';


const ServicePage = () => {
  const renderer = ({days, hours, minutes, seconds, completed}) => {
    if (completed) {
      // Render a completed state
      return <span>You are good to go!</span>;
    } else {
      return (
        <>
          <div className="countdownlist-item">
            <div className="count-title">Days</div>
            <div className="count-num">{days}</div>
          </div>
          <div className="countdownlist-item">
            <div className="count-title">Hours</div>
            <div className="count-num">{hours}</div>
          </div>
          <div className="countdownlist-item">
            <div className="count-title">Minutes</div>
            <div className="count-num">{minutes}</div>
          </div>
          <div className="countdownlist-item">
            <div className="count-title">Seconds</div>
            <div className="count-num">{seconds}</div>
          </div>
        </>
      );
    }
  };
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="section-title text-center">
                <h3 className="title mb-3">Providing our trusted <span className="text-warning">Services</span></h3>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="text-center">
                <div className="mb-4 pb-3">
                  <img src={rocketImage} alt="" height="150" className="mg-fluid" />
                </div>
                <h1>We are Launching Soon..!!</h1>
                <p className="text-muted mb-4 pb-3">Start working with Jobcy that can provide everything you need to generate awareness, drive traffic, connect.</p>
                <div id="countdown" className="d-flex">
                  <Countdown date="2022/12/31" renderer={renderer} />
                </div>
                <Form action="#" className="coming-soon-subacribe mt-4">
                  <div className="input-group mb-3">
                    <Input type="text" className="form-control text-dark" placeholder="Enter your email" />
                    <button className="btn btn-primary" type="button">Subscribe</button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
          {/* {(servicePage).map((servicePageDetails, key) => (
              <Col lg={4} md={6} key={key}>
                <Card className="service-box mt-4 border-0">
                  <CardBody className="p-4">
                    <div className="service-icon icons-md">
                      <Icon icom={servicePageDetails.serviceIcon} color="#02af74" />
                    </div>
                    <div className="mt-4">
                      <h5>{servicePageDetails.serviceName}</h5>
                      <p className="text-muted">{servicePageDetails.serviceText}</p>
                    </div>
                    <div className="learn-more">
                      <Link to="#" className="form-text text-primary">Learn More <i className="uil uil-angle-right-b"></i></Link>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))} */}
        </Container>
      </section>

    </React.Fragment>
  );
};

export default ServicePage;
