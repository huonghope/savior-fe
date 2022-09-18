import React, {useState} from 'react';
import {
  Col,
  Row,
  Container,
  Nav,
  NavLink,
  TabContent,
  TabPane,
} from 'reactstrap';
import classnames from 'classnames';

// Process Images Import
import processImage1 from '../../assets/images/process-01.png';
import processImage2 from '../../assets/images/process-02.png';
import processImage3 from '../../assets/images/process-03.png';

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState('1');

  const tabChange = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="section-title me-5">
                <h3 className="title">How It Work</h3>
                <p className="text-muted">제공한 이력서 양식대로 작성을 완료되시면 간력하게 얻데이트해주시면 끝이!</p>
                <Nav className="process-menu  flex-column nav-pills">
                  <NavLink to="#"
                    className={classnames({active: activeTab === '1'})}
                    onClick={() => {
                      tabChange('1');
                    }}
                    type="button"
                  >
                    <div className="d-flex">
                      <div className="number flex-shrink-0">
                                                        1
                      </div>
                      <div className="flex-grow-1 text-start ms-3">
                        <h5 className="fs-18">회원가입 진행</h5>
                        <p className="text-muted mb-0">사용자의 기본 정보를 입력하고 회원가입을 진행한다. 로그인을 해서 이력서의 양식을 다운로드 한다. 받은 이력서의 양식을 성실하게 입력한 후에 업데이트한다.</p>
                      </div>
                    </div>
                  </NavLink>

                  <NavLink to="#"
                    className={classnames({active: activeTab === '2'})}
                    onClick={() => {
                      tabChange('2');
                    }}
                    type="button"
                  >
                    <div className="d-flex">
                      <div className="number flex-shrink-0">
                                                        2
                      </div>
                      <div className="flex-grow-1 text-start ms-3">
                        <h5 className="fs-18">이력서 분식 및 피드백 전달</h5>
                        <p className="text-muted mb-0">업데이트한 이력서를 인공지능을 통해서 카테고리 및 정보별로 분석하고 사용자한테 피드백을 전달한다.</p>
                      </div>
                    </div>
                  </NavLink>

                  <NavLink to="#"
                    className={classnames({active: activeTab === '3'})}
                    onClick={() => {
                      tabChange('3');
                    }}
                    type="button"
                  >
                    <div className=" d-flex">
                      <div className="number flex-shrink-0">
                                                        3
                      </div>
                      <div className="flex-grow-1 text-start ms-3">
                        <h5 className="fs-18">직무 지원</h5>
                        <p className="text-muted mb-0">사용자한테 이력서를 통해서 적합하는 직무를 추천한다. 사용자가 원하는 직문을 선택해서 회사를 지원한다.</p>
                      </div>
                    </div>
                  </NavLink>

                </Nav>
              </div>
            </Col>
            <Col lg={6}>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <img src={processImage1} alt="" className="img-fluid" />
                </TabPane>
                <TabPane tabId="2">
                  <img src={processImage2} alt="" className="img-fluid" />
                </TabPane>
                <TabPane tabId="3">
                  <img src={processImage3} alt="" className="img-fluid" />
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default HowItWorks;
