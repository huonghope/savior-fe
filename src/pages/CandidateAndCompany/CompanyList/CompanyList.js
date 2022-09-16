import React from 'react';
import {Container} from 'reactstrap';
import MetaTags from 'react-meta-tags';
import CompanyDetails from './CompanyDetails';
import Section from './Section';

const CompanyList = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Company List </title>
      </MetaTags>
      <Section/>
      <section className="section">
        <Container>
          <CompanyDetails/>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default CompanyList;
