/* eslint-disable max-len */
import React from 'react';
import {Link} from 'react-router-dom';

// import UserImage
import userImage3 from '../../../assets/images/user/img-03.jpg';

const BlogColumn = () => {
  return (
    <React.Fragment>
      <ul className="list-inline mb-0 mt-3 text-muted">
        <li className="list-inline-item">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <img src={userImage3} alt="" className="avatar-sm rounded-circle" />
            </div>
            <div className="ms-3">
              <Link to="/blogauther" className="primary-link"><h6 className="mb-0">By Alice Mellor</h6></Link>
            </div>
          </div>
        </li>
        <li className="list-inline-item">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <i className="uil uil-calendar-alt"></i>
            </div>
            <div className="ms-2">
              <p className="mb-0"> Aug 02, 2021</p>
            </div>
          </div>
        </li>
        <li className="list-inline-item">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0">
              <i className="uil uil-comments-alt"></i>
            </div>
            <div className="ms-2 flex-grow-1">
              <p className="mb-0"> 2 Comments</p>
            </div>
          </div>
        </li>
      </ul>
      <div className="mt-4">
        <h2>이력서 작성 요령 ~~</h2>
        <h4>인적사항</h4><br></br>
        <p className="text-muted">
        이름, 성별, 생년월일, 주소, 연락처(이메일, 휴대전화, 비상연락망 등), 생년월일은 지원자의 인적사항을 알아보기 위한 정보이므로 주민등록에 기재된 것을 기준으로 작성합니다.
        연락처는 명확히 기재하고 면접을 위한 연락시 분실이나 번호가 바뀌는 등 바로 연락이 어려울 경우를 대비하여 비상연락망을 기재하는 것도 좋으며, 비상연락망은 가족이나 친구도 무방하나 구직활동 중임을 인지하여 기업의 전화를 응대할 수 있게 이야기를 해두어야 합니다.</p>
        <div className='text-center mb-4'>
          <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbhPiv4%2FbtqDKpu0AAy%2FtdasvdxE1b2lrP5vjkbdL1%2Fimg.jpg"/>
        </div>
        <h4>학력사항</h4>
        <p>학력사항은 최종학력부터 기재하도록 합니다.
        일반적으로 고교졸업 이상(대학원 포함) 학력을 기술하는데 대학명과 전공명, 본교 및 분교 여부, 재학기간(년/월 단위) 등을 정확히 써야 합니다.
        또한 편입한 경우에는 전 학교 및 현재의 학교명을 기재하고, 학점을 기재해야 할 경우 학교마다 만점의 기준(4.0 또는 4.5만점)이 다른 경우가 있으니 입사지원서 양식에서 학점의 만점기준을 정확하게 표시하여 기재합니다.</p>
        <div className='text-center mb-4'>
          <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F1Hh1A%2FbtqDLFc2ydn%2FOAmDkrHrFJqeH6pPFau1J1%2Fimg.jpg"/>
        </div>
        <h4>경력사항</h4>
        <p>
        경력사항은 학력사항과 마찬가지로 가장 최근의 경력부터 기술하며, 지원하는 직무와 관련된 업무일 경우 다른 경력사항보다 더 상세하게 적는 것이 좋습니다.
        신입의 경우 사회활동 경험을 기술하되, 구성은 근무기간, 히사(기관)명, 업무내용 정도로 최대한 구체적으로 담당업무와 이를 통해 자신이 만들어낸 성과를 기술합니다.
        경력자의 경우 경력기술서를 별도로 작성합니다.
        자신이 근무한 회사명가 주요사업, 소속 부서, 최종 직급, 근무기간, 주요업무 및 성과 등을 표기하며, 근무기간은 연도와 월을 기재하며 만약 부서이동이나 직책승진, 해외 근무 등이 있었다면 별도로 표기합니다.
        담당업무에 자신의 업무를 단순 기술하는 것은 지양하는 것이 좋으며, 지원하는 직무와 관련된 주요업무를 기술하고 이를 통해 자신이 만들어낸 성과를 수치화하여 어필해야합니다. 또한, 수행업무를 사회적 용어에 맞게 작성하는 것이 좋습니다.<br></br><br></br>
        경력의 경우 이력서의 경력사항 예시<br></br><br></br>
          - 회사명:ㅇㅇ /회사주요산업 : ㅇㅇ/ 사업부서명 : 마케팅기획부 /직책(직급) : 사원 /근무기간 : 2017.03.01 ~ 2018.12.31 /주요사업 및 성과 : ㅇㅇㅇ사이트 운영
          - 2016년 5월 오픈 ㅇㅇㅇ가입<br></br>
          ㅇㅇ이벤트 진행 : 이벤트 내 가입률 ㅇㅇ%상승/월간 매출 ㅇㅇ달성<br></br>
          키워드 광고 및 메일 등 마케팅 전략수립<br></br>
        </p>
        <div className='text-center mb-4'>
          <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F1MFSg%2FbtqDMIz7bQ7%2FcVDy4tRDZRzn0gI8zsKp91%2Fimg.jpg"/>
        </div>
        <h4>자격사항 및 어학능력</h4>
        <p>직무와 연관성 있는 자격증을 최근 취득한 순서로 기재하고 자격명, 취득일, 발행처를 명확하게 기재해야 합니다. 어학능력은 어학별 점수 및 등급을 기재하고 유효기간이 존재하기 때문에 취득일을 명확히 기재합니다.</p>
        <h4>기타사항</h4>
        <p>자사양식 및 온라인 지원의 경우는 정해진 양식에 맞춰 작성해야 하고 임의수정은 불가능하므로 지원하고자 하는 기업의 지원서 방식을 확인하여 요구되는 항목에 적합한 준비가 필요합니다.자유양식의 경우 직무역량이 돋보이게 자신만의 형식을 구축하는 것이 가능합니다. 교육 이수 사항을 추가하거나 직무능력을 구조화하여 자신의 능력을 부각시킬 수 있는 지원서를 작성해봅시다.</p>
        <div className='text-center mb-4'>
          <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbK84Jc%2FbtqDKpPf3FG%2FTAK7NIF1sZrRoKZo7Jc5qk%2Fimg.jpg"/>
        </div>
        <i>
        작성요령을 잘 익히셔서 나에게 맞는 이력서 잘 기재하여 좋은 결과 있으시길 바랍니다.<br></br>
        뽜이팅~~~!!!!!<br></br>
        오늘도 좋은 하루 되시기 바랍니다.<br></br>
        </i>
        <div className="d-flex align-items-center mb-4">
          <div className="flex-shrink-0">
            <b>Tags:</b>
          </div>
          <div className="flex-grow-1 ms-2 d-flex flex-wrap align-items-start gap-1">
            <Link to="#" className="badge bg-soft-success mt-1 fs-14">Business</Link>
            <Link to="#" className="badge bg-soft-success mt-1 fs-14">design</Link>
            <Link to="#" className="badge bg-soft-success mt-1 fs-14">Creative</Link>
            <Link to="#" className="badge bg-soft-success mt-1 fs-14">Event</Link>
          </div>
        </div>
        <ul className="blog-social-menu list-inline mb-0 text-end">
          <li className="list-inline-item">
            <b>Share post:</b>
          </li>
          <li className="list-inline-item">
            <Link to="#" className="social-link bg-soft-primary">
              <i className="uil uil-facebook-f"></i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#" className="social-link bg-soft-success">
              <i className="uil uil-whatsapp"></i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#" className="social-link bg-soft-blue">
              <i className="uil uil-linkedin-alt"></i>
            </Link>
          </li>
          <li className="list-inline-item">
            <Link to="#" className="social-link bg-soft-danger">
              <i className="uil uil-envelope"></i>
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default BlogColumn;
