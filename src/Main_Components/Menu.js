import React from "react";
import ImgMenu from "../Assets/Menu003.webp"

function Menu() {
    return (
        <div style={{height: "100vh"}}>
          <img style={{maxWidth: "100%" ,height: "100%" , 
          display: "flex",
          margin: "0 auto"}} 
          src={ImgMenu} alt=" " />
        </div>
    );
  }

export default Menu;