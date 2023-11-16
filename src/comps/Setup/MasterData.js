import React from "react";
import "../../Styles/styles.css";
import NavBar from "../navContainer.js";

import userPicture from "../../assets/image.png";
import home from "../../assets/home.svg";
import Header from "../header.js";

const MasterData = () => {


  const data =[
    {
      name : "Division",
      link:"/",
      color : ""

    },
    {
      name : "District",
      link:"/",
      color : ""

    },
  ];
  
  return (
    <>
      <Header setvalue={false} />
      <div className="homeContainer">
        <NavBar />
        <div className="bodyContainer">
          <div className="bodyHead">
            <div className="headTop">
              <h3>MasterData</h3>
             
              <div className="dashItems">
              <img
                  style={{ cursor: "pointer" }}
                  src={home}
                  alt="searchIcon"
                />
                 <p>/  MasterData</p>
                <div className="searchBar">
                 
                </div>
              </div>
              </div>
              
            
             
           
          </div>

      
         
       
        </div>
      </div>
    </>
  );
};

export default MasterData;
