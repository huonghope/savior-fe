import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import MetaTags from 'react-meta-tags';
import Pagination from '../../Jobs/JobList2/Pagination';
import CandidateDetails from './CandidateDetails';
import JobFilters from './JobFilters';
import Section from './Section';


const CandidateList = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Candidate List </title>
      </MetaTags>
      <Section/>
      <section className="section">
        <Container>
          <JobFilters/>
          <Row>
            <Col lg={12}>
              <CandidateDetails/>
            </Col>
          </Row>
          <Pagination/>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default CandidateList;
