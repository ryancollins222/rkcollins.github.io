import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ProjectModal from './ProjectModal';

let Project = ({project}) => {
  const [modalShow, setModalShow] = React.useState(false);

  return(
    <>
    <Col xs={10} md={6} xl={4}
    className="mx-auto mb-5"
    >
      <Card className="h-100" onClick={() => setModalShow(true)}>
        <Card.Img variant="top" src={project.image_urls[0]} />
        <Card.Body >
          <Card.Title>{project.project_name}</Card.Title>
          <Card.Text>
            {project.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    
    <ProjectModal 
      project={project}
      show={modalShow}
      onHide={() => setModalShow(false)}
    />
    </>
  );
}

export default Project;