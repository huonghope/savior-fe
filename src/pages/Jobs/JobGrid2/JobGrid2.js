import React from 'react';
import {Container, Row} from 'reactstrap';
import MetaTags from 'react-meta-tags';
import Pagination from '../JobList2/Pagination';
import JobVacancy2 from './JobVacancy2';
import Section from './Section';


const JobGrid2 = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Job Grid2 </title>
      </MetaTags>
      <Section/>
      <section className="section">
        <Container>
          <Row>
            <JobVacancy2/>
          </Row>
          <Pagination/>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default JobGrid2;
