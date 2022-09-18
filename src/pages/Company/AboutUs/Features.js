import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import {Icon} from '@iconify/react';

const Features = () => {
  const features = [
    {
      id: 1,
      featureIcon: 'uim-object-ungroup',
      featureName: 'Manage Job Ads',
    },
    {
      id: 2,
      featureIcon: 'uim-telegram-alt',
      featureName: 'Create CV',
    },
    {
      id: 3,
      featureIcon: 'uim-lock-access',
      featureName: 'Privacy Policy',
    },
    {
      id: 4,
      featureIcon: 'uim-user-md',
      featureName: 'Recruiter Profiles',
    },
    {
      id: 5,
      featureIcon: 'uim-airplay',
      featureName: 'Display Jobs',
    },
    {
      id: 6,
      featureIcon: 'uim-rocket',
      featureName: 'For Agencies',
    },
    {
      id: 7,
      featureIcon: 'uim-history',
      featureName: 'Quick Support',
    },
    {
      id: 8,
      featureIcon: 'uim-bookmark',
      featureName: 'Bookmark Jobs',
    },
    {
      id: 9,
      featureIcon: 'uim-graph-bar',
      featureName: 'Real-time Analytics',
    },

  ];
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7}>
              <div className="section-title text-center mb-5">
                <h3 className="title mb-4">Key Features</h3>
                <p className="para-desc text-muted mx-auto">여러분 자신을 돌아보고, 이해하며 긍정적인 측면을 찾도록 도와 주는 심성수련으로, 자기성장을 돕고, 자신감과 구직욕구를 더 높여 드리기 위한 플랫폼입니다.</p>
              </div>
            </Col>
          </Row>
          <Row >
            {(features).map((featuresDetails, key) => (
              <Col lg={4} md={6} className="mt-4 pt-2" key={key}>
                <div className="about-feature p-3 d-flex align-items-center rounded-3">
                  <div className="featrue-icon flex-shrink-0">
                    <Icon icon={featuresDetails.featureIcon} className="text-primary" />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h6 className="fs-18 mb-0">{featuresDetails.featureName}</h6>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Features;
