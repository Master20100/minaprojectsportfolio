import React from 'react';
import project1 from '../../Assets/project1.jpg';
import project2 from '../../Assets/project2.jpg';
import project3 from '../../Assets/project3.jpg';
import project4 from '../../Assets/project4.jpg';
import project5 from '../../Assets/project5.jpg';
import project6 from '../../Assets/project6.jpeg';
export default function Portfolio() {
  return (
    <section id="workcontainer">

    <h1 id="workword">Work :-</h1>
  <h1>Please find below my projects</h1>
  
  
  <article id="projectcontainer">
    <a href="https://master20100.github.io/Weather-Forecast/" className="item" id="project1">
        <h4 className="projectName">Weather-Forecast</h4>
        <img src={project1} alt="weatherforecast" />
    </a>
      <a href="https://master20100.github.io/Password-generator/" className="item">
          <h4 className="projectName">Password-generator</h4>
          <img src={project2}  alt="password generator" />
        
      </a>
      <a href="https://master20100.github.io/Questions-game/" className="item">
          <h4 className="projectName">Questions-game</h4>
            <img  src={project3}   alt="questions game" />
      </a>
      <a href="https://github.com/Master20100/README-creator" className="item">
          <h4 className="projectName">README-creator</h4>
          <img  src={project4}  alt="readme creator" />
        </a>
      <a href="https://master20100.github.io/Work-Day-Scheduler/" className="item">
          <h4 className="projectName">Work-Day-Scheduler</h4>
          <img src={project5}   alt="work day scheduler" />
        </a>
      <a href="https://rschragger.github.io/MAR/" className="item">
          <h4 className="projectName">MAR project(top 10 youtube finder with lyrics finder)</h4>
          <img src={project6}   alt="MAR project" />
        </a>
  </article>
</section>



  );
}
