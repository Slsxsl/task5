import React, { useState } from "react";
import "./recentProject.css";
import Container from "../container/contianer";
import n from "../../assets/n.png";
import up from "../../assets/up.png";
import down from "../../assets/down.png";

const RecentP = () => {
  
  const [openProjects, setOpenProjects] = useState([]);

  const toggleDetails = (index) => {
    setOpenProjects(prevState => 
      prevState.includes(index)
        ? prevState.filter(id => id !== index) 
        : [...prevState, index] 
    );
  };

  const projects = [
    { title: "Web Design Project", rate: "10$/hour", details: "This Project Involves implementing both frontend and back-end functionalities ,as  well as integrating with third-party Apls."},
    { title: "Web Design Project", rate: "10$/hour", details: "This Project Involves implementing both frontend and back-end functionalities ,as  well as integrating with third-party Apls."},
    { title: "Web Design Project", rate: "10$/hour", details: "This Project Involves implementing both frontend and back-end functionalities ,as  well as integrating with third-party Apls."},
    { title: "Web Design Project", rate: "10$/hour", details: "This Project Involves implementing both frontend and back-end functionalities ,as  well as integrating with third-party Apls."}
  ];

  return (
    <div className="recentproject">
      <Container>
        <div className="head">
          <h4>Your Recent Project</h4>
          <p>see all projects</p>
        </div>
        <div className="project-card">
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <div className="project-head">
                <img src={n} alt="Project" />
                <div className="text">
                  <h4>{project.title}</h4>
                  <p>{project.rate}</p>
                </div>
                <img 
                  src={openProjects.includes(index) ? up : down} 
                  alt="toggle details"
                  onClick={() => toggleDetails(index)}
                  style={{ cursor: 'pointer' }}
                />
              </div>
         
              {openProjects.includes(index) && (
                <div className="details">
                  <p>{project.details}</p>
                </div>
              )}
              <div className="line"></div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default RecentP;
