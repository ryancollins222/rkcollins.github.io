import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Project from './Project';

let ProjectContainer = ({projects}) => {
  
  return (
    <Row id="projects">
      <Col xs="auto" className="section-title">
        <h2 className="px-2 mb-0">Projects</h2>
      </Col>
      <Col xs={12}>
        <div className="underline"></div>
      </Col>

      {projects.map((project) => 
        <Project 
          key={project.id}
          project={project}
        />
      )} 
      
       
        {/* <video src="/imgs/myJam.mov" controls autoPlay muted loop className="mx-auto card-img-top"></video>
        <div className="card-body card-back">
          <h5 className="card-title">myJam</h5>
          <p className="card-text">Fullstack Capstone project for PDX Code Guild.  Search for upcoming concerts by city using Axios for API requests to Ticketmaster, also allows local artists to add their own events.  HTML, CSS, Bootstrap, Django, Django REST framework, Vue.js, Axios.</p>
        </div> */}
    </Row>
  );
}

export default ProjectContainer;