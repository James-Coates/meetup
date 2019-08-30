import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import headerImg from './assets/images/header-img.svg';


function Header() {
  return (
      <Container fluid={true} className="header">
        <Row className="header__container">
          <Col className="logo__box">
            <h1 className="logo__text">ello*</h1>
          </Col>
          <Col className="hero__box">
            <Row className="hero__container">
              <Col className="hero__textBox">
                <div className="hero__text">
                  <h2 className="hero__header">
                    Find events in your area today!
                  </h2>
                </div>
                <Button className="hero__btn" href="#main">View Events</Button>
              </Col>
              <Col className="hero__imgBox">
                <img className="hero__img" src={headerImg} alt="group of friends" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
  )
}

export default Header;