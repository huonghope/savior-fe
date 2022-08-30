import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import MetaTags from 'react-meta-tags';
import Section from '../JobList4/Section';
import Pagination from '../JobList4/Pagination';
import JobSearchOptions from './JobSearchOptions';
import Popular from './Popular';
import Sidebar from './Sidebar';
import JobVacancyPost2 from './JobVacancyPost2';

const JobList2 = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Job List2 | Jobcy - Job Listing Template | Themesdesign</title>
      </MetaTags>
      <Section/>
      <section className="section">
        <Container >
          <Row>
            <Col lg={9}>
              <div className="me-lg-5">
                <JobSearchOptions/>
                <Popular/>
                <JobVacancyPost2/>
                <Pagination/>
              </div>
            </Col>
            <Sidebar/>
          </Row>
        </Container>
      </section>


    </React.Fragment>
  );
};

export default JobList2;
