import React from 'react';
import Container from 'react-bootstrap/Container';
import projects from '../data.json';
// components
import Header from './Header';
import Main from './Main';

function App() {
  return (
    <>
    <Container fluid>
      <Header />  
      <Main projects={projects}/>
      <footer>
        <div className="col">
          <div className="title-underline"></div>
        </div>
      </footer>
    </Container> 
    </> 
  );
}

export default App;
