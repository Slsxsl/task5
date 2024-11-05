import React ,{useState} from "react";
import Container from "../../component/container/contianer";
import "./steps.css"
import { useLocation } from "react-router-dom";
const Steps=()=>{
    let {pathname}=useLocation();
    return(
<div className="steps">
    <div className={`step ${pathname==="/" || pathname==="/phoneNumber" || pathname==="/verfication" ? "active" : ""}`}></div>
    <div className={`step ${ pathname==="/phoneNumber"  ? "half" : pathname==="/verfication" ? "active" : ""}`}>
      
    </div>
    
    <div className="step"></div>

</div>
    )

}
export default Steps