import React ,{useState} from "react";
import Card from "../../component/card/card";
import Container from "../../component/container/contianer";
import Steps from "../../component/steps/steps";
import "./accountType.css";
import client from "../../assets/client.png";
import free from "../../assets/user.png";
import { Link} from "react-router-dom"
const AccType = () => {
    const [state,setState]=useState(null)
    const handleState=(type)=>{
        setState(type)
    }


  return (
    <div>
      <Container>
        <div className="content">
          <Card />

          <div className="body">
            <Steps />
            <div className="text">
              <h1>Let's Get started!</h1>
              <p>How do you plan to use this platform</p>
            </div>

            <div className="cards">
              <div className={`cardd ${state==="freelancer" ? "active" : ""}`}
              onClick={()=>handleState("freelancer")}>
               <div> <img src={free} alt="" /></div> 
                <div className="t">
                <h1 >Freelancer</h1>
                <p>
                  I’m a freelancer ready to work for  projects
                </p>
                </div>
              </div>

              <div className={`cardd ${state==="client" ? "active" : ""}`}
              onClick={()=>handleState("client")}>
                <div><img src={client} alt="" /></div>
               <div className="t">
               <h1>Client</h1>
                <p>
                  II’m a client searching for talented 
                  freelancers
                </p>
               </div>
              </div>
            </div>
<Link to={"/phoneNumber"}> <button className={state==="freelancer" || state==="client" ? "active" :"" } disabled={state === null} >Next   </button></Link>
           
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AccType;
















