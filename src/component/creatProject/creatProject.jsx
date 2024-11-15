import React from "react";
import "./creatProject.css";
import Container from "../container/contianer";
import userpic from "../../assets/user2.png";

const creatProject = () => {
  return (
    <div className="create">
      <Container>
        <div className="create-section">
          <img src={userpic} alt="" />
          <div className="text">
            Mustafa Let’s Create a Project !<div className="add">+</div>
          </div>
        </div>
       
      </Container>
    </div>
  );
};
export default creatProject;
