import React from 'react';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="header">
        <h1>D.Vidya sagar</h1>
        <h2>Student</h2>
        <div className="contact-info">
          <h3>
            <a href="mailto:sagar.21bce8777@vitapstudent.ac.in">sagar.21bce8777@vitapstudent.ac.in</a>
          </h3>
          <h3>Phone Number: 8142836320</h3>
        </div>
      </div>

      <div className="about">
        <h2>About Me</h2>
        <p>
          I am a passionate and creative professional with expertise in WEB development and IoT and various fields. I love to learn, experiment, and create meaningful projects.
        </p>
      </div>

      <div className="education">
        <h2>Education</h2>
        <div className="education-item">
          <h3>University - VIT-AP</h3>
          <p>Degree and Major - ECE-CORE</p>
        </div>
        <div className="education-item">
          <h3>Another University</h3>
          <p>Another Degree and Major</p>
        </div>
      </div>

      <div className="skills">
        <h2>Skills</h2>
        <ul>
          <li>JAVA</li>
          <li>WEB-DESIGN</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
        </ul>
      </div>

      <div className="projects">
        <h2>Projects</h2>
        <div className="project-item">
          <h3>Project 1</h3>
          <p>A brief description of your project.</p>
        </div>
        <div className="project-item">
          <h3>Project 2</h3>
          <p>Another random project.</p>
        </div>
      </div>

      <div className="contact">
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out to me through email or phone. I'm always open to new opportunities and collaborations.
        </p>
        <p>Email: 
            <a href="mailto:sagar.21bce8777@vitapstudent.ac.in">sagar.21bce8777@vitapstudent.ac.in</a></p><p>Phone: 8142836320
            </p></div></div>);
};

export default Portfolio;
