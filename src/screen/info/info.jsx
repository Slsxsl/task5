import React, { useState,useEffect  } from "react";
import Card from "../../component/card/card";
import Container from "../../component/container/contianer";
import Steps from "../../component/steps/steps";
import "./info.css";
import { Link } from "react-router-dom";


const Info=()=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handlename=(e)=> setName(e.target.value);
    const handleEmail=(e)=>setEmail(e.target.value);
    const handlepassword=(e)=>setPassword(e.target.value);
    const isValid=name.trim()!=="" && email.trim()!=="" && password.trim()!=="" ;
return(
    <Container>
        <div className="content">
            <Card/>
            <div className="body">
                <Steps/>
                <div className="text" >
                    <h1>Enter Your Information</h1>
                    <p>Please enter your personal information to complete the registration 
                        <br />process.</p>

                </div>
                <div className="inputs">
                   <div className="enter">
                   <label className="labels" htmlFor="name" > Name</label>
                   <input type="text" id="name" placeholder="Enter your Full name " value={name} onChange={handlename}
                   className={name.trim()!=="" ? "acive" : ""} />

                   </div>
                   <div className="enter">
                   <label className="labels" htmlFor="email" > Email</label>
                   <input type="email" id="email" placeholder="Enter your Email adress " value={email} onChange={handleEmail}
                   className={email.trim()!=="" ? "acive" : ""}/>

                   </div>
                   <div className="enter">
                   <label className="labels" htmlFor="password" > Password</label>
                   <input type="password" id="password" placeholder="Enter password " value={password} onChange={handlepassword}
                   className={password.trim()!=="" ? "acive" : ""}/>
                   </div>
                   
                    

                    

                </div>
              <Link to="">
              <button className={`b1 ${isValid ? "active" : ""}`} 
                                disabled={!isValid }

                >Complete Regestration</button>

              </Link>
            </div>

        </div>
    </Container>

)
}
export default Info