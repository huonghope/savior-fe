import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';

// Import Images
import teamMemberImage2 from '../../../assets/images/user/img-02.jpg';

import teamMemberImage10 from '../../../assets/images/user/img-10.jpg';


const TeamPage = () => {
  const teamPage = [
    {
      id: 1,
      teamMemberImage: teamMemberImage2,
      teamMemberName: 'Nguyen Huong',
      teamMemberPosition: 'Founder & CEO',

    },
    {
      id: 2,
      teamMemberImage: teamMemberImage10,
      teamMemberName: 'Hoang TUng',
      teamMemberPosition: 'Data Analyst',

    },
  ];
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row>
            {(teamPage.map)((teamPageDetails, key)=> (
              <Col lg={4} md={6} key={key}>
                <div className="team-box card border-0 mt-4">
                  <div className="team-img position-relative mx-auto">
                    <img src={teamPageDetails.teamMemberImage} alt="" className="img-thumbnail" />
                    <ul className="team-social list-unstyled">
                      <li><Link to="#"><i className="mdi mdi-facebook"></i></Link></li>
                      <li className="my-1"><Link to="#"><i className="mdi mdi-twitter"></i></Link> </li>
                      <li><Link to="#"><i className="mdi mdi-skype"></i></Link></li>
                    </ul>
                  </div>
                  <div className="team-content card-body text-center">
                    <Link to="#" className="primary-link"><h6 className="fs-17 mb-1">{teamPageDetails.teamMemberName}</h6></Link>
                    <p className="text-muted mb-0">{teamPageDetails.teamMemberPosition}</p>
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

export default TeamPage;
