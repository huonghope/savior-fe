import React, {useState} from 'react';
import {
  Col,
  Container,
  Row,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Label,
} from 'reactstrap';
import {Link} from 'react-router-dom';

// import images
import flagKr from '../../assets/images/flags/kr.jpg';
import flagVn from '../../assets/images/flags/vn.jpg';
import flagUs from '../../assets/images/flags/us.jpg';

const TopBar = () => {
  const iconTobar = [
    {
      id: 1,
      classname: 'uil uil-facebook-messenger-alt',
      link: 'https://www.facebook.com/',
    },
    {
      id: 2,
      classname: 'uil uil-linkedin-alt',
      link: 'https://www.linkedin.com/in/huong-nguyen-dinh-177529228/',
    },
    {
      id: 3,
      classname: 'uil uil-twitter-alt',
      link: 'https://twitter.com/dhuong0929',
    },
  ];
  // Language Dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  // Signup Modal
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(!modal);

  const [modalSignIn, setModalSignIn] = useState(false);
  const openModalSignIn = () => setModalSignIn(!modalSignIn);

  const handleLogin = () => {
    alert('Coming soon !!!');
  };

  const handleJoin = () => {
    alert('Coming soon !!!');
  };

  return (
    <React.Fragment>
      <div className="top-bar" style={{zIndex: 1030}}>
        <Container fluid className="custom-container">
          <Row className="g-0 align-items-center">
            <Col md={7}>
              <ul className="list-inline mb-0 text-center text-md-start">
                <li className="list-inline-item">
                  <p className="fs-13 mb-0">
                    {' '}
                    <i className="mdi mdi-map-marker"></i> Your Location:{' '}
                    <Link to="#" className="text-dark">
                      Seoul, South Korea
                    </Link>
                  </p>
                </li>
                <li className="list-inline-item">
                  <ul className="topbar-social-menu list-inline mb-0">
                    {(iconTobar || []).map((icon, key) => (
                      <li className="list-inline-item" key={key}>
                        <a href={icon.link} className="social-link" target='_blank' rel="noopener noreferrer">
                          <i className={icon.classname}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </Col>
            <Col md={5}>
              <ul className="list-inline mb-0 text-center text-md-end">
                <li className="list-inline-item py-2 me-2 align-middle">
                  <span
                    onClick={openModalSignIn}
                    role="button"
                    className="text-dark fw-medium fs-13"><i className='uil uil-user-circle'></i>
                    Sign In</span>
                  <Modal isOpen={modalSignIn} toggle={openModalSignIn} role="dialog" centered>
                    <ModalBody className="p-5">
                      <div className="position-absolute end-0 top-0 p-3">
                        <button
                          type="button"
                          className="btn-close"
                          onClick={openModalSignIn}
                        ></button>
                      </div>
                      <div className="auth-content">
                        <div className="w-100">
                          <div className="text-center mb-4">
                            <h5>Sign In</h5>
                          </div>
                          <Form action="#" className="auth-form">

                            <FormGroup className="mb-3">
                              <Label
                                htmlFor="usernameInput"
                                className="form-label"
                              >
                              Username
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                id="usernameInput"
                                placeholder="Enter your username"
                              />
                            </FormGroup>
                            <FormGroup className="mb-3">
                              <label htmlFor="passwordInput" className="form-label">
                              Password
                              </label>
                              <Input
                                type="password"
                                className="form-control"
                                id="passwordInput"
                                placeholder="Password"
                              />
                            </FormGroup>
                            <div className="text-center">
                              <button
                                onClick={() => handleLogin()}
                                type="submit"
                                className="btn btn-primary w-100"
                              >
                              Sign In
                              </button>
                            </div>
                          </Form>
                        </div>
                      </div>
                    </ModalBody>
                  </Modal>
                </li>
                <li className="list-inline-item py-2 me-2 align-middle">
                  <span
                    onClick={openModal}
                    role="button"
                    className="text-dark fw-medium fs-13"
                  >
                    <i className="uil uil-lock"></i>
                    Sign Up
                  </span>
                  <Modal isOpen={modal} toggle={openModal} role="dialog" centered>
                    <ModalBody className="p-5">
                      <div className="position-absolute end-0 top-0 p-3">
                        <button
                          type="button"
                          className="btn-close"
                          onClick={openModal}
                        ></button>
                      </div>
                      <div className="auth-content">
                        <div className="w-100">
                          <div className="text-center mb-4">
                            <h5>Sign Up</h5>
                            <p className="text-muted">
                            Sign Up and get access to all the features of Jobcy
                            </p>
                          </div>
                          <Form action="#" className="auth-form">

                            <FormGroup className="mb-3">
                              <Label
                                htmlFor="usernameInput"
                                className="form-label"
                              >
                              Username
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                id="usernameInput"
                                placeholder="Enter your username"
                              />
                            </FormGroup>
                            <FormGroup className="mb-3">
                              <Label
                                htmlFor="emailInput"
                                className="form-label"
                              >
                              Email
                              </Label>
                              <Input
                                type="email"
                                className="form-control"
                                id="emailInput"
                                placeholder="Enter your email"
                              />
                            </FormGroup>
                            <FormGroup className="mb-3">
                              <label htmlFor="passwordInput" className="form-label">
                              Password
                              </label>
                              <Input
                                type="password"
                                className="form-control"
                                id="passwordInput"
                                placeholder="Password"
                              />
                            </FormGroup>
                            <FormGroup className="mb-4">
                              <div className="form-check">
                                <Input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="flexCheckDefault"
                                />
                                <Label
                                  className="form-check-label"
                                  htmlFor="flexCheckDefault"
                                >
                                I agree to the{' '}
                                  <Link
                                    to="/"
                                    className="text-primary form-text text-decoration-underline"
                                  >
                                  Terms and conditions
                                  </Link>
                                </Label>
                              </div>
                            </FormGroup>
                            <div className="text-center">
                              <button
                                onClick={() => handleJoin()}
                                type="submit"
                                className="btn btn-primary w-100"
                              >
                              Sign Up
                              </button>
                            </div>
                          </Form>
                          <div className="mt-3 text-center">
                            <p className="mb-0">
                            Already a member ?{' '}
                              <Link
                                to="/signin"
                                className="form-text text-primary text-decoration-underline"
                              >
                                {' '}
                              Sign-in{' '}
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </ModalBody>
                  </Modal>
                </li>
                <li className="list-inline-item align-middle">
                  <Dropdown
                    isOpen={dropdownOpen}
                    toggle={toggle}
                    className="d-inline-block language-switch"

                  >
                    <DropdownToggle tag="button" type="button" className="btn">
                      <img
                        src={flagKr}
                        alt=""
                        height="16"
                      />
                    </DropdownToggle>

                    <DropdownMenu className="dropdown-menu-end" end>
                      <DropdownItem
                        to="/"
                        className="dropdown-item notify-item language"
                        data-lang="eng"
                      >
                        <img
                          src={flagVn}
                          alt=""
                          className="me-1"
                          height="12"
                        />
                        <span className="align-middle">VietNam</span>
                      </DropdownItem>
                      <DropdownItem
                        to="/"
                        className="dropdown-item notify-item language"
                        data-lang="sp"
                      >
                        <img
                          src={flagUs}
                          alt=""
                          className="me-1"
                          height="12"
                        />
                        <span className="align-middle">English</span>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default TopBar;
