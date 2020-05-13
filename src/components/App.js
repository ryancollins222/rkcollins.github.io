import React from 'react';
import Container from 'react-bootstrap/Container';
import projects from '../data.json';
// components
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <>
    <Container fluid>
      <Header />  
      <Main projects={projects}/>
      <Footer />
    </Container> 
    </> 
  );
}

export default App;
