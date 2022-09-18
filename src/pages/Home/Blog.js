import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import {Link} from 'react-router-dom';

// Import Blog
import BlogImage1 from '../../assets/images/blog/img-01.jpg';
import BlogImage2 from '../../assets/images/blog/img-02.jpg';
import BlogImage3 from '../../assets/images/blog/img-03.jpg';

const Blog = () => {
  const blog = [
    {
      id: 1,
      image: BlogImage1,
      userName: 'Dirio Walls',
      date: '01 July, 2021',
      likesCount: '33',
      commnetCount: '08',
      blogTitle: '좋은 IT회사 지원하기 위한 이력서',
      blogContent: '취미와 마찬가지로 서류전형단계에서 점수화되는 부분은 아니므로 지나친 부담을 가질 필요는 없다. 다만, 면접에서 유리하게 활용하기 위해서는 치밀한 준비가 필요할 것이다.',
    },
    {
      id: 2,
      image: BlogImage2,
      userName: 'Brandon Carney',
      date: '25 June, 2021',
      likesCount: 44,
      commnetCount: 25,
      blogTitle: '매장 괸리를 위한 좋은 이력서 어떤 내용인가?',
      blogContent: '우선, 취미와 연결하여 특기를 고려해 보도록 하자. ‘하산 후 뒤풀이’가 취미라면 ‘건배사’를 특기로 쓸 수 있다. 이는 분위기를 더 좋게 하거나 주변 사람들에게 동기부여 할 수 있는 재능을 의미한다.',
    },
    {
      id: 3,
      image: BlogImage3,
      userName: 'William Mooneyhan',
      date: '16 March, 2021',
      likesCount: 68,
      commnetCount: 20,
      blogTitle: '대학원생을 위한 이력서!',
      blogContent: '보통 취업준비생들이 무난하게 선택하는 취미는 여행, 독서, 영화감상, 운동, 레저, 인터넷, 수집 등이 있다. 사실 어떠한 취미를 선택하는지에 따라 서류전형 단계에서 가점이나 감점이 부여되는 것은 아니다.',
    },
  ];

  return (
    <React.Fragment>
      <section className="section bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="section-title text-center mb-5">
                <h3 className="title mb-3">이력서를 작성 Tips</h3>
                <p className="text-muted">이력서를 작성 시 적극한 정보 및 중요한 내용이 빠진 없이 강조하고 작성하세요.</p>
              </div>
            </Col>
          </Row>
          <Row>
            {(blog || []).map((blogDetails, key) => (
              <Col lg={4} md={6} key={key}>
                <div className="blog-box card p-2 mt-3">
                  <div className="blog-img position-relative overflow-hidden">
                    <img src={blogDetails.image} alt="" className="img-fluid" />
                    <div className="bg-overlay"></div>
                    <div className="author">
                      <p className=" mb-0"><i className="mdi mdi-account text-light"></i><Link to="#"
                        className="text-light user">{blogDetails.userName}</Link></p>
                      <p className="text-light mb-0 date"><i className="mdi mdi-calendar-check"></i> {blogDetails.date}</p>
                    </div>
                    <div className="likes">
                      <ul className="list-unstyled mb-0">
                        <li className="list-inline-item"><Link to="#" className="text-white"><i
                          className="mdi mdi-heart-outline me-1"></i> {blogDetails.likesCount}</Link></li>
                        <li className="list-inline-item"><Link to="#" className="text-white"><i
                          className="mdi mdi-comment-outline me-1"></i> {blogDetails.commnetCount}</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <Link to="/blogdetails" className="primary-link">
                      <h5 className="fs-17">{blogDetails.blogTitle}</h5>
                    </Link>
                    <p className="text-muted">{blogDetails.blogContent}</p>
                    <Link to="/blogdetails" className="form-text text-primary">Read more <i className="mdi mdi-chevron-right align-middle"></i></Link>
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

export default Blog;
