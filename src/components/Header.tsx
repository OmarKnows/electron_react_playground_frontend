import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileCirclePlus,
  faArrowRightFromBracket,
  faUserPlus,
  faHouse,
  faBook,
} from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
          <Row>
            <Col
              onClick={() => {
                navigate('/login');
              }}
            >
              <Row>
                <span className="text-center">
                  <FontAwesomeIcon
                    className="clickable"
                    color="red"
                    icon={faArrowRightFromBracket}
                  />
                </span>
              </Row>
              <Row>
                <h6>خروج</h6>
              </Row>
            </Col>
            <Col
              onClick={() => {
                navigate('/');
              }}
            >
              <Row>
                <span className="text-center">
                  <FontAwesomeIcon
                    className="clickable"
                    color="#282c34"
                    icon={faHouse}
                  />
                </span>
              </Row>
              <Row>
                <h6>الرئيسة</h6>
              </Row>
            </Col>

            <Col
              onClick={() => {
                navigate('/register');
              }}
            >
              <Row>
                <span className="text-center">
                  <FontAwesomeIcon
                    className="clickable"
                    color="skyblue"
                    icon={faUserPlus}
                  />
                </span>
              </Row>
              <Row>
                <h6>تسجيل</h6>
              </Row>
            </Col>

            <Col
              onClick={() => {
                navigate('/search');
              }}
            >
              <Row>
                <span className="text-center">
                  <FontAwesomeIcon
                    className="clickable"
                    color="green"
                    icon={faFileCirclePlus}
                  />
                </span>
              </Row>
              <Row>
                <h6>إضافة</h6>
              </Row>
            </Col>

            <Col
              onClick={() => {
                navigate('/log');
              }}
            >
              <Row>
                <span className="text-center">
                  <FontAwesomeIcon
                    className="clickable"
                    color="Navy"
                    icon={faBook}
                  />
                </span>
              </Row>
              <Row>
                <h6>المتابعة</h6>
              </Row>
            </Col>
          </Row>

          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav ms-auto">
              <div className="mx-3">
                <h5>department / name</h5>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
