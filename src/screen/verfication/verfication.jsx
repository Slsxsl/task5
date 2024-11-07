import React, { useState,useEffect ,useRef  } from "react";
import Card from "../../component/card/card";
import Container from "../../component/container/contianer";
import Steps from "../../component/steps/steps";
import "./verfication.css";
import { OtpInput } from "reactjs-otp-input";
import clock from "../../assets/clock.png"
import { Link } from "react-router-dom";

const Verf = () => {
  const [otp, setOtp] = useState("");

  const handleChange = (otp) => {
        setOtp(otp);
      }
  
  const getClassname = (index) => {
    return otp.length > index ? "active" : "";
  };
   
const startMinutes=1;
    const [timeLeft, setTimeLeft] = useState(startMinutes * 60); 
  
    useEffect(() => {
      if (timeLeft === 0) return; 
  
      const interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000); 
  
      
      return () => clearInterval(interval);
    }, [timeLeft]);
  
    
    const minutes = Math.floor(timeLeft / 60); 
    const seconds = timeLeft % 60; 
  
  
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  
  



  return (
    <Container>
      <div className="content">
        <Card />
        <div className="body">
          <Steps />
          <div className="text1">
            <h1>Enter your phone number</h1>
            <p>
              Enter your phone number to verify your identity and the validity
              of your number to safely activate your account on the platform.
            </p>
          </div>
          <div className="text2">
            <h1>Verify phone number</h1>
            <p>
              Enter verification code sent to <br /> your phone number via WhatsApp
            </p>
          </div>

          <div className="OtpInput">
            <OtpInput
              value={otp}
              onChange={handleChange}
              numInputs={6}
              separator={<span></span>}
              isInputNum={true}
              inputStyle={otp !== "" ? { 
               
                border: "1px solid #3C97AF", 
                background: "#ECF6F9", 
                color: "#3C97AF" ,
              } : { 
                
                border: "1px solid rgba(235, 235, 235, 1)", 
              
                color: "#3C97AF" 
              }}/> </div>

          <div className="countDown">
            <img src={clock} alt="" />
            
            {formattedTime}
            
          </div>
          <p className= {`check ${timeLeft=== 0? "active" : ""}`}>Didn't receive a message? <a href="#" >Resend</a></p>
          <Link to="/information"><button className={otp.length===6 ? "active" : "" } disabled={otp.length<6} > Verify</button></Link>
        </div>
      </div>
    </Container>
  );
};


export default Verf;
