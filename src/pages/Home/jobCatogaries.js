import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Icon} from '@iconify/react';

const Jobcatogaries = () => {
  const categories = [
    {
      id: 1,
      icon: 'uim-layers-alt',
      name: '기확-전략',
      job: 2024,
    },
    {
      id: 2,
      icon: 'uim-airplay',
      name: '마케팅-홍보-조사',
      job: 1250,
    },
    {
      id: 3,
      icon: 'uim-bag',
      name: '회계-세무-재무',
      job: 802,
    },
    {
      id: 4,
      icon: 'uim-user-md',
      name: 'IT개발-데이터',
      job: 577,
    },
    {
      id: 5,
      icon: 'uim-hospital',
      name: '디자인',
      job: 285,
    },
    {
      id: 6,
      icon: 'uim-telegram-alt',
      name: '고객상담-TM',
      job: 495,
    },
    {
      id: 7,
      icon: 'uim-scenery',
      name: '상품기획-MD',
      job: 1045,
    },
    {
      id: 8,
      icon: 'uim-android-alt',
      name: '서비스-교육',
      job: 1516,
    },

  ];
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="section-title text-center">
                <h3 className="title">가장 많이 찾은 직무 리스트 </h3>
                <p className="text-muted">사용자의 이력서를 업데이트 해주시면
                  <br></br>
                적합하는 이력서를 분석해주면 적합한 직무를 빠르게 연결해 드리겠습니다.</p>
              </div>
            </Col>
          </Row>

          <Row>
            {(categories || []).map((item, key) => (
              <Col lg={3} md={6} mt={4} pt={2} key={key}>
                <div className="popu-category-box rounded text-center">
                  <div className="popu-category-icon icons-md">
                    <Icon icon={item.icon} className="text-primary" />
                  </div>
                  <div className="popu-category-content mt-4">
                    <Link to="#" className="text-dark stretched-link">
                      <h5 className="fs-18">{item.name}</h5>
                    </Link>
                    <p className="text-muted mb-0">{item.job} Jobs</p>
                  </div>
                </div>
              </Col>
            ))}

          </Row>
          <Row>
            <Col lg={12}>
              <div className="mt-5 text-center">
                <Link to="/jobscategories" className="btn btn-primary btn-hover"> 모든 직무 케테고리 보기<i className="uil uil-arrow-right"></i></Link>
              </div>
            </Col>
          </Row>
        </Container>

      </section>
    </React.Fragment>

  );
};

export default Jobcatogaries;
