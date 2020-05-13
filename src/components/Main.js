import React from 'react';
// components
import About from './About';
import Skills from './Skills';
import ProjectContainer from './ProjectContainer';


let Main = ({projects}) => {
  return (
    <main>
      <About />
      <Skills />
      <ProjectContainer {...projects}/>
      
    </main>
  );
}

export default Main;