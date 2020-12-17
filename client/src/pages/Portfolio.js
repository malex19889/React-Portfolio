import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/container";
import PortItem from "../components/Portfolioitems";

function Portfolio() {
  return(
    <div>
      <h1>Portfolio</h1>
      <Row>
        
          <PortItem imglink="imgs/portfolio website 1.JPG" img="imgs/portfolio website 1.JPG" alt="" deployed="https://github.com/malex19889/Project-1.git" name="Code Refactor"></PortItem>
      <PortItem imglink="https://malex19889.github.io/Password-Generator/" img="imgs/Pw_gene_Demo.JPG" alt="" deployed="https://github.com/malex19889/Password-Generator.git" name="Password Generator"></PortItem>
      <PortItem imglink="https://malex19889.github.io/Js_Code_Quiz/" img="imgs/Code_Quiz_Demo.JPG" alt="" deployed="https://malex19889.github.io/Js_Code_Quiz/" name="Js Code Quiz"></PortItem>
      <PortItem imglink="https://malex19889.github.io/Weather-Dashboard/" img="imgs/Weather_Dash_Demo.JPG" alt="" deployed="https://github.com/malex19889/Weather-Dashboard.git" name="Weather Dashboard"></PortItem>
      <PortItem imglink="https://malex19889.github.io/Who-s-Open/" img="imgs/Whos_Open1.JPG" alt="" deployed="https://github.com/malex19889/Who-s-Open.git" name="Who's Open"></PortItem>
      <PortItem imglink="https://eat-da-burgerzz.herokuapp.com/" img="imgs/Eat_Da_Burger_Demo.JPG" alt="" deployed="https://github.com/malex19889/burger.git" name="Eat-Da-Burger"></PortItem>
      <PortItem imglink="https://blooming-wildwood-71202.herokuapp.com/" img="imgs/audiofiler.JPG" alt="" deployed="https://github.com/malex19889/Project2.git" name="Audiofiler"></PortItem>
      <PortItem imglink="" img="" alt="" deployed="" name=""></PortItem>
        
      </Row>
      
    </div> 
  )
        
           
       
    
  }


export default Portfolio;
