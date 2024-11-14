import React, { useState } from "react";
import "./header.css"
import ring from "../../assets/ring.png"
import search from "../../assets/search.png"
import Container from "../../component/container/contianer";
import { Link, useLocation } from "react-router-dom";
const Header=()=>{
    const [activeLink,setActiveLink]=useState("")
    const handleLink=(link)=>{
        setActiveLink(link)
 

    }
           let {pathname}=useLocation();
    return(
      <div className="MainHeader">
          <Container>
            <div className="mainContent"> 
            <div className="logo">Freelancer platform</div>

            <div className="menu"> 
                <Link to="/Main" className={pathname==="/Main" ? "active" : ""} onClick={()=>handleLink("Main")}>Home</Link>
                <Link to="/dashboard" className={pathname==="/dashboard" ? "active" : ""} onClick={()=>handleLink("dashboard")}>Dashboard</Link>
                <Link to="/settings" className={pathname==="/settings" ? "active" : ""} onClick={()=>handleLink("settings")}>Settings</Link>
             </div>

             <div className="search"> <img src={search} alt="" /><input type="text" placeholder="Search"  /></div>
             <div className="notification">
                <img src={ring} alt="" />
                <div className="circle"></div>
             </div>

        </div>
        <div className="line"></div>
          </Container>

      </div>
    )
}

export default Header