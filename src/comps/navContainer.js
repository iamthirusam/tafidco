// Sidebar.js
import React, { useState } from "react";
import "./Home.css";
import VendorMaster from "./VendorMaster";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const data = [
    {
      name: "Dashboard",
      icon: "speed",
      link:"/"
      
    },
    {
      name: "Implementing agency details",
      icon: "badge",
      subNavs: [
        {name: "Municipal Corporation", link: "/municipalcorp"},
        {name: "Municipality", link: "/municipalcorp"},
        {name: "Town Panchayat", link: "/municipalcorp"},
        {name: "Water Board", link: "/municipalcorp"}
        
       
      ],
    },
    {
      name: "Post Sanction",
      icon: "inventory",
      subNavs: [
        {name: "Pre Sanction", link: "/presanction"},
        {name: "Project Sanction", link: "/projectsanction"},
        {name: "Projects", link: "/projects"},
       
      ],
    },
    {
      name: "Administration Sanction",
      icon: "upload_file",
      subNavs: [
        {name: "File Upload", link: "/fileupload"},
        {name: "File List", link: "/filelist"}
      ]
    },
    {
      name: "Financial Progress",
      icon: "finance",
      subNavs: [
        {name: "Financial Progress", link: "/financialprogress"},
        {name: "Financial Progress List", link: "/financialprogresslist"},
       
      ],
    },
    {
      name: "Physical Progress",
      icon: "sprint",
      subNavs: [
        {name: "Physical Progress Updation", link: "/projectupdation"},
        
      ],
    },
    {
      name: "Master",
      icon: "folder_managed",
      subNavs: [
        {name: "Vendor Master", link: "/vendormaster"},
      ]
    },
    {
      name: "User Profile",
      icon: "person",
      subNavs: ["User Profile", "Logout"],
    },
  ];
  const [selectedNavItem, setSelectedNavItem] = useState(0); // Set to 0 initially

  const handleNavItemClick = (index) => {
    setSelectedNavItem(selectedNavItem === index ? null : index);
  };

  return (
    <div className="sidebar">
      {data.map((item, index) => (
       
        <div
          key={index}
          className={`nav-item ${selectedNavItem === index ? "active-bx" : ""}`}
        >
          {selectedNavItem === index && <div className="active-box">. </div>}
        

          <div
            className="nav-item-header"
            onClick={() => handleNavItemClick(index)}
          >
              {!data.subNavs && <Link to={item.link} key={index}>
            <div className="alignMenu">
              <span
                className={`material-symbols-rounded ${
                  selectedNavItem === index ? "active" : ""
                }`}
              >
                {item.icon}
              </span>
              <span
                className={`nav-text ${
                  selectedNavItem === index ? "active" : ""
                }`}
              >
                {item.name}
              </span>
            </div>
             </Link >}
            {item.subNavs && (
              <span
                className={`material-symbols-rounded toggle-button ${
                  selectedNavItem === index ? "active" : ""
                }`}
              >
                {selectedNavItem === index ? "expand_less" : "expand_more"}
              </span>
            )}

          </div>
         
          
          {selectedNavItem === index && item.subNavs && (
            <div className="subnav-container">
              {item.subNavs.map((item, subIndex) => (
                <Link to={item.link} key={subIndex}>
                  <div className="subnav-item">{item.name}</div>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
      
    </div>
  );
};
export default Sidebar;
