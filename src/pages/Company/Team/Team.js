import React from 'react';
import MetaTags from 'react-meta-tags';
import Section from '../Team/Section';
import TeamPage from '../Team/TeamPage';

const Team = () => {
  return (
    <React.Fragment>
      <MetaTags>
        <title>Team | Jobcy - Job Listing Template | Themesdesign</title>
      </MetaTags>
      <Section/>
      <TeamPage/>
    </React.Fragment>
  );
};

export default Team;
