import React, { useState } from "react";
import Card from "../../component/card/card";
import Container from "../../component/container/contianer";
import Steps from "../../component/steps/steps";
import "./verfication.css";
import { Link } from "react-router-dom";


const Verf =()=>{
    return(
        <Container>
            <div className="content">
                <Card/>
                <div className="body">
                    <Steps/>
                </div>


                
            </div>
        </Container>

    )
}
export default Verf