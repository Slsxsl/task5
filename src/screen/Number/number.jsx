import React, { useState } from "react";
import Card from "../../component/card/card";
import Container from "../../component/container/contianer";
import Steps from "../../component/steps/steps";
import "./number.css";
import iraq from "../../assets/iraq.png";
import { Link } from "react-router-dom";

const PhoneNo = () => {
  const countries = [
    { name: "iraq", code: "+964", flag: "iq" },
    { name: "Saudi Aribia", code: "+966", flag: "SA" },
    { name: "Joradn", code: "+962", flag: "JO" },
    { name: "Syria", code: "+963", flag: "SY" },
   
  ];

  const [phoneNumber, setPhoneNumber] = useState("");  
  const [selectedCountry, setCountry] = useState(countries[0]);  

  const handleNumber = (e) => {
    const value = e.target.value;

 
    if (/^\d*$/.test(value)) {
      setPhoneNumber(value);
    }
  };


  const isValidPhoneNumber = phoneNumber.length ===11;

  return (
    <div>
      <Container>
        <div className="content">
          <Card />
          <div className="body">
            <Steps />
            <div className="text">
              <h1>Enter your phone number</h1>
              <p>
                Enter your phone number to verify your identity and the validity
                of your number to safely activate your account on the platform.
              </p>
            </div>

            <p className="phone">Phone number</p>
            <div className="phone-no">
              {/* <div className="code">
                <img src={iraq} alt="" />
                +964
              </div> */}
<select>
  {countries.map((el,i)=>(
    <option >
     {el.name} {el.code} 
    </option>
  ))}
</select>
{/* {countries.map((el, index) => (
    <option key={index} value={el.code}>
      <img src={el.flag} alt={el.name} style={{ width: "20px", marginRight: "10px" }} />
      {el.code} {el.name}
    </option>
  ))} */}

              <input
                type="text"  
                placeholder="Enter your phone number"
                
                onChange={handleNumber}  
                maxLength={11}  
              />
            </div>

            <Link to={isValidPhoneNumber ? "/verfication" : "#"}>
              <button
                className={isValidPhoneNumber ? "active" : ""}
                disabled={!isValidPhoneNumber}  
              >
              Send verfication code
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PhoneNo;
