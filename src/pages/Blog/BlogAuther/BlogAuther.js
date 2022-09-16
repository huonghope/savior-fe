import React from 'react';
import {Container, Row} from 'reactstrap';
import MetaTags from 'react-meta-tags';
import Section from '../../Blog/BlogAuther/Section';
import LeftSideContent from '../../Blog/BlogAuther/LeftSideContent';
import RightSideContent from '../../Blog/BlogAuther/RightSideContent';

const BlogAuther = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Blog Auther </title>
      </MetaTags>
      <Section/>
      <section className="section">
        <Container>
          <Row>
            <LeftSideContent/>
            <RightSideContent/>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default BlogAuther;
