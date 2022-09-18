import React from 'react';
import MetaTags from 'react-meta-tags';
import Section from '../../Blog/Blog/Section';
import BlogContent from '../../Blog/Blog/BlogContent';

const Blog = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Blog </title>
      </MetaTags>
      <Section/>
      <BlogContent/>
    </React.Fragment>
  );
};

export default Blog;
