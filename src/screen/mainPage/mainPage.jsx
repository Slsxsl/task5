import React from "react";
import "./mainPage.css"
import Container from "../../component/container/contianer";
import Userprofile from "../../component/userProfile/userProfile"
import Header from "../../component/header/header"
import About from "../../component/about/about"
import Phistory from "../../component/projectHistory/projectHistory"
import CreatProject from "../../component/creatProject/creatProject";
import RecentProject from "../../component/recentProject/recentProject";
import Freelancers from "../../component/freelancerList/freelancerList";
const MainPage = () => {
  return (
    <div className="mainPage">
            <Header/>
      <Container>
      <div className="MainBody">
        <div className="left">  
        <Userprofile/>
      <About/>
      <Phistory/>
        </div>

        <div className="mid">
          <CreatProject/>

        </div>
        <div className="right">
          <RecentProject/>
          <Freelancers/>

        </div>



      </div>
      </Container>
     
    </div>
  );
};
export default MainPage;
