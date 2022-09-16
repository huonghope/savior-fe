import React from 'react';
import {Container, Row, Col, Card, CardImg, CardBody} from 'reactstrap';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay, Pagination} from 'swiper';

// swiper css

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

// Images import
import MailChimp from '../../assets/images/review/1.jpg';
import WordPress from '../../assets/images/review/2.jpg';
import Instagram from '../../assets/images/review/3.jpg';

const Testimonal = () => {
  const testimonal = [
    {
      id: 1,
      image: MailChimp,
      content: '적합하는 직무를 찾아주셔서 감사합니다. 덕분에 좋은 회사를 다니고 있습니다. 진심으로 감사합니다. 앞으로도 많은 응원합니다.',
      name: '홍길동',
      occupation: 'IT 개발자',
    },
    {
      id: 2,
      image: WordPress,
      content: '역시 IT분야를 나날이 발전하면서 우리삶도 편리해질 것같아요! 생생 못하는 서비스를 만났어요. 덕분에 고민도 많이 줄었고 인생이 완전히 바뀌었요. 덕분에 높은 월급을 받고 있죠.',
      name: '김동국',
      occupation: '웹 디자인',
    },
    {
      id: 3,
      image: Instagram,
      content: '친구를 통해서 정보를 알게 되었는데 사용해보니까 너무 편리합니다. 덕분에 집근처에 있는 매장을 취직한 후에 좋은 일을 찾았고 열심히 일하고 있습니다. 파이팅 !!! ',
      name: '김유나',
      occupation: '매장 관리',
    },
  ];

  SwiperCore.use([Autoplay, Pagination]);
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="section-title text-center mb-4 pb-2">
                <h3 className="title mb-3">플랫폼 이용한 구직자 리뷰</h3>
                <p className="text-muted">이전에 이력서 및 취직 대한 고민이 많은 구직자들한테 도움이 많이 되었습니다.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Swiper
                className="pb-5"
                loop={true}
                slidesPerView={1}
                autoplay={{delay: 3000, disableOnInteraction: false}}
                pagination={{clickable: true}}
              >
                <div className="swiper-wrapper">
                  {(testimonal || []).map((testimonalDetails, key) => (
                    <SwiperSlide key={key}>
                      <Card className="testi-box">
                        <CardBody>
                          <div className="mb-4">
                            <CardImg
                              src={testimonalDetails.image}
                              height="400"
                              alt=""
                            />
                          </div>
                          <p className="testi-content lead text-muted mb-4">
                            {testimonalDetails.content}
                          </p>
                          <h5 className="mb-0">{testimonalDetails.name}</h5>
                          <p className="text-muted mb-0">
                            {testimonalDetails.occupation}
                          </p>
                        </CardBody>
                      </Card>
                    </SwiperSlide>
                  ))}
                </div>
                <div className="swiper-pagination"></div>
              </Swiper>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Testimonal;
