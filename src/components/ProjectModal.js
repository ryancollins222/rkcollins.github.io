import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

let ProjectModal = (props) => {
  let project = props.project;
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      // centered
      scrollable
    >
      <Modal.Header closeButton >
        <Modal.Title id="contained-modal-title-vcenter">
          {project.project_name}
        </Modal.Title>

        
        
      </Modal.Header>

      <Modal.Body>
        <Row>
          <Col xs={12} lg={6}>
            <p>
              {project.description}
            </p>
          </Col>
          <Col xs={12} lg={6}>
            <h4>Technologies</h4>
            <ul>
              {project.technologies.map((technology) =>
                <li key={project.id}>{technology}</li>
              )}
            </ul>
          </Col>
        </Row>
        <img src={project.image_urls[0]} alt="project 1" />
        <img src={project.image_urls[1]} alt="project 2" />
        
      </Modal.Body>
      <Modal.Footer>
        <div className="mr-auto modal-buttons">
          <Button href={project.live_link}  target="_blank" className="mr-3" variant="outline-success" style={{display: project.live_link ? "inline-block" : "none"}}>Live Demo</Button>
          <Button href={project.github_link}  target="_blank" variant="outline-dark">Github Repo</Button>
        </div>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProjectModal;
