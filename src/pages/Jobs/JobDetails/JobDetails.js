import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import MetaTags from 'react-meta-tags';
import qs from 'query-string';
import {jobVacancy} from '../../../assets/data/data';
import Error404 from '../../ExtraPages/Error404';
import JobDetailsDescription from './JobDetailsDescription';
import JobVacancyPost from './JobVacancyPost';
import RightSideContent from './RightSideContent';
import Section from './Section';

const JobDetails = () => {
  const params = qs.parse(window.location.search);
  const jobId = params.id;
  const jobInformation = jobVacancy.find((job) => parseInt(job.id) === parseInt(jobId));

  if (jobInformation == undefined) {
    return <Error404> </Error404>;
  }
  return (
    <React.Fragment>
      <MetaTags>
        <title>Job Details </title>
      </MetaTags>
      <Section/>
      <section className="section">
        <Container>
          <Row>
            <Col lg={8}>
              <JobDetailsDescription jobInformation={jobInformation}/>
              <JobVacancyPost />
            </Col>
            <Col lg={4} className="mt-4 mt-lg-0">
              <RightSideContent jobInformation={jobInformation}/>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default JobDetails;
