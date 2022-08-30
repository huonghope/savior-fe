import React from 'react';
import {Container} from 'reactstrap';
import MetaTags from 'react-meta-tags';
import JobFilters from '../CandidateList/JobFilters';
import Pagination from '../../Jobs/JobList2/Pagination';
import CandidateGridDetails from './CandidateGridDetails';
import Section from './Section';

const CandidateGrid = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Candidate Grid | Jobcy - Job Listing Template | Themesdesign</title>
      </MetaTags>
      <Section/>
      <section className="section">
        <Container>
          <JobFilters/>
          <CandidateGridDetails/>
          <Pagination/>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default CandidateGrid;
