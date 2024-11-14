import React from "react";
import "./freelancerList.css"
import Container from "../container/contianer";
import f1 from "../../assets/f1.png"
import star from "../../assets/star.png"



const freelancers=()=>{

    const freelancerarr=[
        { name:"zena saad" , date:"2months ago"  , pic:" " , ratepic:star , ratetext:"8.0" },
        { name:"zena saad" , date:"2months ago"  , pic:f1 , ratepic:star , ratetext:"8.0" },
        { name:"zena saad" , date:"2months ago"  , pic:f1 , ratepic:star , ratetext:"8.0" },
        { name:"zena saad" , date:"2months ago"  , pic:f1 , ratepic:star , ratetext:"8.0" },
        { name:"zena saad" , date:"2months ago"  , pic:f1 , ratepic:star , ratetext:"8.0" }
     ]
    return(
<div className="freelancerList">
    <Container>
        <div className="head">
            <h4>FreeLancers you worked with</h4>
            <p>see all</p>

        </div>
        <div className="freelancers-list">
            {freelancerarr.map((el)=>
        
        <div className="freelancer">
            <img src={el.pic} alt="" className="profile" />
            <div className="text">
                <h5>{el.name}</h5>
                <p>{el.date}</p>
            </div>
            <div className="rate">
                <img src={el.ratepic} alt="" />
                <p>{el.ratetext}</p>
            </div>

            </div>

        
        )}

            
            

        </div>

    </Container>
</div>
    )
}
export default freelancers