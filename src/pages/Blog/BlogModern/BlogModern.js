import React from 'react';
import MetaTags from 'react-meta-tags';
import Section from '../../Blog/BlogModern/Section';
import BlogModernContent from '../../Blog/BlogModern/BlogModernContent';

const BlogModern = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Blog Modern | Jobcy - Job Listing Template | Themesdesign</title>
      </MetaTags>
      <Section/>
      <BlogModernContent/>
    </React.Fragment>
  );
};

export default BlogModern;
