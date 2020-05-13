import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

let Footer = () => {
  return (
    <footer>
      <Row>
        <Col xs={12}>
          <div className="title-underline"></div>
        </Col>
        <Col xs={12} className="text-center my-3">
          <a href="https://www.linkedin.com/in/ryan-collins-7869b0198/" target="_blank">
            <i  className="fab fa-linkedin text-primary fa-2x"></i>
          </a>
          <a href="https://github.com/ryancollins222" target="_blank">
            <i className="fab fa-github-square fa-2x text-primary"></i>
          </a>
        </Col>
      </Row>
      
    </footer>
  );
}

export default Footer;