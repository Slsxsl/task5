import React , {useState} from "react";
// import Container from "../container/contianer"
import "./card.css"
import Wave from "../../assets/vector.png"
import wave2 from "../../assets/vector2.png"
import vector from "../../assets/vector"
const Card=()=>{
   return(
<div className="card">

    <h1>Welcome to your <br /> Freelancing Hub!</h1>
    <p>We’re thrilled to have you here! Whether you're a client <br /> searching for skilled freelancers to bring your projects to life or <br /> a freelancer eager to find exciting opportunities, this is the <br /> place where connections are made, and ideas come to reality.  <br />Let's start building something amazing together!</p>

    {/* <vector/> */}


<img className="wave1" src={Wave}/>
<img  className="wave2" src={wave2}/>




</div>





   )
}

export default Card