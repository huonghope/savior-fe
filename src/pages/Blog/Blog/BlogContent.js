/* eslint-disable max-len */
import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Col, Row} from 'reactstrap';

// User Images
import userImage1 from '../../../assets/images/user/img-01.jpg';
import userImage2 from '../../../assets/images/user/img-02.jpg';
import userImage3 from '../../../assets/images/user/img-03.jpg';

// Blog Images
import blogImage4 from '../../../assets/images/blog/img-04.jpg';
import blogImage5 from '../../../assets/images/blog/blog5.jpg';
import blogImage6 from '../../../assets/images/blog/blog6.jpg';

const BlogContent = () => {
  const blogContentText = [
    {
      id: 1,
      blogRow: [
        {
          id: 1,
          blogImage: blogImage5,
          blogTitle: 'PPT',
          blogDate: 'July 29, 2022',
          blogHeading: '팀장님께 칭찬받는 PPT 만드는 진짜 비법 7가지',
          blogText: `마케터는 다 PPT를 기깔나게 만들 수 있다? 삑. 정답은 아니요.
          나는 디자인이 재밌다는 이유로 광고홍보를 전공하면서 4년내내 툭 치면 나오는 자판기처럼 PPT를 생산해왔지만 내 주위에는 파워포인트를 켜본적도 없이 졸업한 동기들도 많다.`,
          blogAutherImage: userImage2,
          blogAutherName: '안나이',
          BlogAutherPosition: '디자인너',
        },
        {
          id: 2,
          blogImage: blogImage6,
          blogTitle: '회사 문화',
          blogDate: 'July 25, 2022',
          blogHeading: '외국인이 본 대한민국의 기업문화',
          blogText: `한국의 이점을 누리기 위한 외국인의 한국이주에 대한 정보에 앞서 외국인들이 신선하게 여기고 있는 한국에서의 구직 및 직장문화를 살펴보고자 한다.`,
          blogAutherImage: userImage3,
          blogAutherName: '김동국',
          BlogAutherPosition: '프로젝트 관리자',
        },
      ],
    },
  ];
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="align-items-center">
            <Col lg={12}>
              <div className="mb-4">
                <h4>Latest & Trending Blog Post</h4>
              </div>
            </Col>
            <Col lg={7}>
              <div className="post-preview overflow-hidden rounded-3 mb-3 mb-lg-0">
                <Link to="/blogdetails"><img src={blogImage4} alt="Blog" className="img-fluid blog-img" /></Link>
              </div>
            </Col>
            <Col lg={5}>
              <article className="post position-relative">
                <div className="post ms-lg-4">
                  <p className="text-muted mb-2"><b>Product</b> - Aug 01, 2021</p>
                  <h5 className="mb-3"><Link to="/blogdetails" className="primary-link">이력서 잘쓰는법 뭔가 있을까요?</Link></h5>
                  <p className="text-muted">
                    <i>취업이 갈수록 힘들어지는 것 같은 요즘!</i> <br></br><br></br>
                    <i>회사에 취업을 위해서는 나를 제대로 알려서 나의 이력과 경력이 회사에 필요한 인재상임을 어필하여야 합니다.</i><br></br><br></br>
                    <i>그러려면 나의 얼굴이라 할수 있는 이력서 작성요령을 알아보도록 할까요?</i>
                  </p>
                  <div className="d-flex align-items-center mt-4">
                    <div className="flex-shrink-0">
                      <img src={userImage1} alt="" className="avatar-sm rounded-circle" />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <Link to="/blogauther" className="primary-link"><h6 className="fs-16 mb-0">James Lemire </h6></Link>
                      <p className="text-muted mb-0">Product Manager</p>
                    </div>
                  </div>
                </div>
              </article>
            </Col>
          </Row>

          <Col lg={12}>
            <div className="mt-4">
              <h4>All Blog Post</h4>
            </div>
          </Col>

          {(blogContentText).map((blogContentDetails, key) => (
            <Row key={key}>
              {(blogContentDetails.blogRow).map((blogContentInner, key) => (
                <Col lg={6} key={key}>
                  <article className="post position-relative mt-4" key={key}>
                    <div className="post-preview overflow-hidden mb-3 rounded-3">
                      <Link to="blog-details"><img src={blogContentInner.blogImage} alt="" className="img-fluid blog-img" /></Link>
                    </div>
                    <p className="text-muted mb-2"><b>{blogContentInner.blogTitle}</b> - {blogContentInner.blogDate}</p>
                    <h5 className="mb-3"><Link to="/blogdetails" className="primary-link">{blogContentInner.blogHeading}</Link></h5>
                    <p className="text-muted">{blogContentInner.blogText}</p>
                    <div className="d-flex align-items-center mt-4">
                      <div className="flex-shrink-0">
                        <img src={blogContentInner.blogAutherImage} alt="" className="avatar-sm rounded-circle" />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <Link to="/blogauther" className="primary-link"><h6 className="fs-16 mb-0">{blogContentInner.blogAutherName}</h6></Link>
                        <p className="text-muted mb-0">{blogContentInner.BlogAutherPosition}</p>
                      </div>
                    </div>
                  </article>
                </Col>
              ))}
            </Row>
          ))}

          <Row >
            <Col lg={12} className="mt-5">
              <nav aria-label="Page navigation example">
                <ul className="pagination job-pagination mb-0 justify-content-center">
                  <li className="page-item disabled">
                    <Link className="page-link" to="#" tabIndex="-1">
                      <i className="mdi mdi-chevron-double-left fs-15"></i>
                    </Link>
                  </li>
                  <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                  <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                  <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                  <li className="page-item"><Link className="page-link" to="#">4</Link></li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      <i className="mdi mdi-chevron-double-right fs-15"></i>
                    </Link>
                  </li>
                </ul>
              </nav>
            </Col>
          </Row>
        </Container>
      </section>

    </React.Fragment>
  );
};

export default BlogContent;
