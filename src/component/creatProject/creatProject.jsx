import React from "react";
import "./creatProject.css";
import Container from "../container/contianer";
import userpic from "../../assets/user2.png";
import like from "../../assets/like.png";
import comment from "../../assets/comment.png";

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
        <div className="posts">
        <div className="post">
        <Container>
            
         

            <div className="post-head">
              <img src=" " alt="" className="profile" />
              <div className="text">
                <h5>Client name</h5>
                <p>posted 2 hours ago</p>
              </div>
              <div className="status">Available</div>
            </div>

            <div className="post-body">
              <h5>Looking for full-stack developer with experince +2years</h5>
              <p>
                kkkedkeodkeljceljceijecjenkcekchnekchnekhce k;ck;ockdcl ejcoejn
                eicpe <span>see more</span>
              </p>
              <img src="" alt="" />
            </div>

            <div className="post-footer"> 
                <div className="like">
                  <img src={like} alt="" />
                  like
                </div>
                <div className="comment">
                  <img src={comment} alt="" />
                  comment
                </div>

            </div>

       

        </Container>
        </div>

          
        </div>
      </Container>
    </div>
  );
};
export default creatProject;
