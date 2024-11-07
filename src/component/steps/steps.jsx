import React ,{useState} from "react";
import Container from "../../component/container/contianer";
import "./steps.css"
import { useLocation } from "react-router-dom";
const Steps=()=>{
    let {pathname}=useLocation();
    return(
<div className="steps">
    <div className={`step ${pathname==="/" || pathname==="/phoneNumber" || pathname==="/verfication" || pathname==="/information" ? "active" : ""}`}></div>
    <div className={`step ${ pathname==="/phoneNumber"  ? "half" : pathname==="/verfication" || pathname==="/information" ? "active" : ""}`}>
      
    </div>
    
    <div className={`step ${pathname==="/information" ? "active" : ""}`}></div>

</div>
    )

}
export default Steps