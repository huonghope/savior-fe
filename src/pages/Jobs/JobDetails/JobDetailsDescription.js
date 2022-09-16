/* eslint-disable max-len */
import React, {useEffect} from 'react';
import {Card, CardBody, Col, Row} from 'reactstrap';

// Import Images
import {Link} from 'react-router-dom';
import JobImage10 from '../../../assets/images/featured-job/img-10.png';

const JobDetailsDescription = ({jobInformation}) => {
  if (jobInformation != undefined) {
    return (
      <React.Fragment>
        <Card className="job-detail overflow-hidden">
          <div className='text-center mt-3'>
            <img src={jobInformation.companyImg} alt="" className="img-fluid" style={{height: '100px'}} />
            <div className="job-details-compnay-profile">
              <img src={JobImage10} alt="" className="img-fluid rounded-3 rounded-3" />
            </div>
          </div>
          <CardBody className="p-4">
            <div>
              <Row>
                <Col md={8}>
                  <h5 className="mb-1">{jobInformation.jobDescription}</h5>
                  <ul className="list-inline text-muted mb-0">
                    <li className="list-inline-item">
                      <i className="mdi mdi-account"></i> {jobInformation.companyName}
                    </li>
                    <li className="list-inline-item text-warning review-rating">
                      <span className="badge bg-warning">4.8</span> <i className="mdi mdi-star align-middle"></i><i className="mdi mdi-star align-middle"></i><i className="mdi mdi-star align-middle"></i><i className="mdi mdi-star align-middle"></i><i className="mdi mdi-star-half-full align-middle"></i>
                    </li>
                  </ul>
                </Col>
                <Col lg={4}>
                  <ul className="list-inline mb-0 text-lg-end mt-3 mt-lg-0">
                    <li className="list-inline-item">
                      <div className="favorite-icon">
                        <Link to="#"><i className="uil uil-heart-alt"></i></Link>
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <div className="favorite-icon">
                        <Link to="#"><i className="uil uil-setting"></i></Link>
                      </div>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>

            <div className="mt-4">
              <Row className="g-2">
                <Col lg={3} >
                  <div className="border rounded-start p-3">
                    <p className="text-muted mb-0 fs-13">Experience</p>
                    <p className="fw-medium fs-15 mb-0">{jobInformation.experience}</p>
                  </div>
                </Col>
                <Col lg={3} >
                  <div className="border p-3">
                    <p className="text-muted fs-13 mb-0">Employee type</p>
                    <p className="fw-medium mb-0">{jobInformation.timing}</p>
                  </div>
                </Col>
                <Col lg={3} >
                  <div className="border p-3">
                    <p className="text-muted fs-13 mb-0">Location</p>
                    <p className="fw-medium mb-0">{jobInformation.location}</p>
                  </div>
                </Col>
                <Col lg={3} >
                  <div className="border rounded-end p-3">
                    <p className="text-muted fs-13 mb-0">Offer Salary</p>
                    <p className="fw-medium mb-0">{jobInformation.salary}</p>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="mt-4">
              <h5 className="mb-3">Job Description</h5>
              <div className="job-detail-desc text-center">
                <img src={jobInformation.detailInfor} style={{width: '100%'}}/>
              </div>
            </div>

            {/* <div className="mt-4">
              <h5 className="mb-3">Responsibilities</h5>
              <div className="job-detail-desc mt-2">
                <p className="text-muted">As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.</p>
                <ul className="job-detail-list list-unstyled mb-0 text-muted">
                  <li><i className="uil uil-circle"></i> Have sound knowledge of commercial activities.</li>
                  <li><i className="uil uil-circle"></i> Build next-generation web applications with a focus on the client side</li>
                  <li><i className="uil uil-circle"></i> Work on multiple projects at once, and consistently meet draft deadlines</li>
                  <li><i className="uil uil-circle"></i> have already graduated or are currently in any year of study</li>
                  <li><i className="uil uil-circle"></i> Revise the work of previous designers to create a unified aesthetic for our brand materials</li>
                </ul>
              </div>
            </div>

            <div className="mt-4">
              <h5 className="mb-3">Qualification </h5>
              <div className="job-detail-desc mt-2">
                <ul className="job-detail-list list-unstyled mb-0 text-muted">
                  <li><i className="uil uil-circle"></i> B.C.A / M.C.A under National University course complete.</li>
                  <li><i className="uil uil-circle"></i> 3 or more years of professional design experience</li>
                  <li><i className="uil uil-circle"></i> have already graduated or are currently in any year of study</li>
                  <li><i className="uil uil-circle"></i> Advanced degree or equivalent experience in graphic and web design</li>
                </ul>
              </div>
            </div>

            <div className="mt-4">
              <h5 className="mb-3">Skill & Experience</h5>
              <div className="job-details-desc">
                <ul className="job-detail-list list-unstyled mb-0 text-muted">
                  <li><i className="uil uil-circle"></i> Understanding of key Design Principal</li>
                  <li><i className="uil uil-circle"></i> Proficiency With HTML, CSS, Bootstrap</li>
                  <li><i className="uil uil-circle"></i> Wordpress: 1 year (Required)</li>
                  <li><i className="uil uil-circle"></i> Experience designing and developing responsive design websites</li>
                  <li><i className="uil uil-circle"></i> web designing: 1 year (Preferred)</li>
                </ul>
                <div className="mt-4 d-flex flex-wrap align-items-start gap-1">
                  <span className="badge bg-primary">PHP</span>
                  <span className="badge bg-primary">JS</span>
                  <span className="badge bg-primary">Marketing</span>
                  <span className="badge bg-primary">REACT</span>
                  <span className="badge bg-primary">PHOTOSHOP</span>
                </div>
              </div>
            </div> */}

            <div className="mt-4 pt-3">
              <ul className="list-inline mb-0">
                <li className="list-inline-item mt-1">
                                                        Share this job:
                </li>
                <li className="list-inline-item mt-1">
                  <Link to="#" className="btn btn-primary btn-hover"><i className="uil uil-facebook-f"></i> Facebook</Link>
                </li>
                <li className="list-inline-item mt-1">
                  <Link to="#" className="btn btn-danger btn-hover"><i className="uil uil-google"></i> Google+</Link>
                </li>
                <li className="list-inline-item mt-1">
                  <Link to="#" className="btn btn-success btn-hover"><i className="uil uil-linkedin-alt"></i> linkedin</Link>
                </li>
              </ul>
            </div>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  } else {
    return <div>Coming soon.</div>;
  }
};

export default JobDetailsDescription;
