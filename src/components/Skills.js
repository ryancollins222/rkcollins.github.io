import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

let Skills = () => {
  return (
    <>
    <Row id="skills">
      <Col xs="auto" className="section-title">
        <h2 className="p-0 mb-0">Skills</h2>
      </Col>
      <Col xs={12}>
        <div className="underline"></div>
      </Col>
      <Col xs={12} md={6} className="text-secondary d-flex ">
        <ul>
          <li>HTML</li>
          <li>CSS | Bootstrap</li>
          <li>JavaScript | Node | Express</li>
          <li>React | React Bootstrap</li>
          <li>Vue.js</li>
          <li>Responsive Design</li>
          <li>Axios</li>
        </ul>
      </Col>
      <Col xs={12} md={6} className="text-secondary d-flex ">
        <ul>
          <li>Python | Django</li>
          <li>JSON</li>
          <li>VS Code</li>
          <li>Github | Github Desktop</li>
          <li>Pug</li>
          <li>NPM</li>
          <li>SQL/SQLite</li>
        </ul>
      </Col>
    </Row>
    
        {/* <div className="row justify-content-around">
          <div className="col-md-4 mx-5 my-3 canvas">
            <span className=""><i className="fab fa-js fa-5x"></i></span>
            <h3>JavaScript</h3>
            <div className="blue"></div>
            <div className="back-pic">
              <p className="">Vanilla, Vue.js, DOM Manipulation, APIS.</p>
            </div>
          </div>
         
          <div className="col-md-4 mx-5 my-3 canvas">
            <span><i className="fab fa-python fa-5x"></i></span>
            <h3>Python</h3>
            <div className="blue"></div>
            <div className="back-pic">
              <p className="">Obeject Oriented Programming, Django, Django REST Framework</p>
            </div>
          </div>
        </div>

      <div className="row justify-content-around">
        <div className="col-md-4 mx-5 my-3 canvas">
          <span><i className="fab fa-html5 fa-5x"></i></span>
          <h3>Related Technologies</h3>
          <div className="blue"></div>
          <div className="back-pic">
            <p className="">HTML, VS Code, JSON, AJAX</p>
          </div>
        </div>

        <div className="col-md-4 mx-5 my-3 canvas">
          <i className="fab fa-css3 fa-5x"></i>
          <h3>CSS</h3>
          <div className="blue"></div>
          <div className="back-pic">
            <p className="">Vanilla, Bootstrap 4, Responsive Design.</p>
          </div>
        </div>
      </div> */}
      </>

  );
}

export default Skills;