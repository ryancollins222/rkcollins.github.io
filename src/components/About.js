import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

let About = () => {
  return (
    <Row id="about">
      <Col xs="auto" className="section-title">
        <h2 className="p-0 mb-0">About</h2>
      </Col>
      <Col xs={12}>
        <div className="underline"></div>
      </Col>
      <Col xs={10} lg={8} className="text-center headshot-col mx-auto">
        <img id="headshot" src="/imgs/headshot.jpg" alt="headshot"/>

        <h6>Full Stack JavaScript Developer | Musician | All Around Good Guy</h6>

        <p>After years as a professional in the music industry (including 6.5 years as a guitarist in the Navy band), I realized that I enjoy music much more when I don't have to rely on it as a paycheck.  I felt the need to develop new skills to reach my potential as a professional and person,  and began learning Web Development.  In doing so, I have found something else that I truly enjoy, something that challenges me to learn more and be better every day!</p>
      </Col>
      {/* <div className="about-div mt-3 mx-auto">
        <p className="mx-auto">Career Musician turned Developer. Dreamer, Thinker, Doer.  I believe Anything can be Accomplished with Hard Work and Perseverance.</p>
      </div> */}
    </Row>
  );
}

export default About;