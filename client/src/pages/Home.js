import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { Col, Row, Container } from "../components/container";
import Jumbotron from "../components/Jumbotron";
import CardGroup from "react-bootstrap/CardGroup";

function Home() {
  return(
    <div>
      <Container>
        <Row>
          <Col size="md-12">
            <h1>Michael A. Willingham</h1>
            <img src="/imgs/Bio pic 200x200.jpg" className="align-self-start mr-3 floated" alt="black and white"/>
                        <div className="media-body">
                          <h5 className="mt-0">About Me</h5>
                          <p>
                            I have worked in the live entertainment production industry for the past 12 years.I started out as a stage hand and have worked my way up through many positions such as audio engineer, monitor engineer, video tech, lighting director/programmer, stage manager, and production manger. Due to current events I have had to start looking at other possible fields of work. Computer technology is a very important aspect in live production everything from networking and file systems to basic coding are very common place in the industry. To that end I have started taking this web development class to expand my knowledge.
                          </p>
                        </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
          <div class="media">
                      <img src="/imgs/social logos.png" className="align-self-center mr-3" alt="social media logos"/>
                      <div className="media-body">
                        <h5 className="mt-0">My Links</h5>
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a className="nav-link active" href="https://www.facebook.com/mwillingham" target="blank"><h5>Facebook</h5></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link active" href="https://www.instagram.com/alexlights/" target="blank"><h5>Instagram</h5></a>
                          </li>
                          <li className="nav-link active" target="blank"><a href="https://www.linkedin.com/in/michael-willingham-934a6295/" ><h5>LinkedIn</h5></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link active" href="https://github.com/malex19889" target="blank"><h5>Github</h5></a>
                          </li>
                          <li className="nav-item">
                           <a href="mailto:ldmikew@gmail.com"><h5>Email: lmikew@gmail.com</h5></a>
                          </li>
                        </ul>
                      </div>
                </div>
                <Row>
                <div class="media">
                        <img src="/imgs/indoor show 200x200.jpg" class="align-self-center mr-3" alt="live concert lighting"/>
                        <div class="media-body">
                          <h5 class="mt-0">Live</h5>
                          <p>
                            Lets work together sometime. If you need an experienced crew member or manager hit me up!
                          </p>
                          <p class="mb-0">
                            Lets remember all the good time we had doing live shows, and all the people we meet along the way may they all be safe.
                          </p>
                        </div>
                      </div>
                </Row>
          </Col>
          <Col size="md-6">
            <Jumbotron title="Current Projects!"
            leadst="Check out"
            href="/portfolio"
            leadlink="Portfolio"
            leadend="for full details"></Jumbotron>
            <Row>
                <CardGroup>
                  <Card 
                  img="imgs/Pw_gene_Demo.JPG" title="Password Generator" text="Project info: A simple password generator that allows the user to slect a length and what type of characters they want included in their password" href="https://malex19889.github.io/Password-Generator/"></Card>
                  <Card 
                  img="imgs/Eat_Da_Burger_Demo.JPG" title="Eat-Da-Burger" text="Project info: A fun burger management app " href="https://eat-da-burgerzz.herokuapp.com/"></Card>
                </CardGroup>
                <CardGroup>
                  <Card 
                  img="imgs/audiofiler.JPG" title="Audiofiler" text="Project info: this app lets the user save their music collection with notes and media type and store it to a database" href="https://github.com/malex19889/Project2.git"></Card>
                  <Card 
                  img="imgs/Whos_Open1.JPG" title="Whos's Open?" text="Project info: This app lets a user select a location type search and a radius then shows what locations are currently open." href="https://malex19889.github.io/Who-s-Open/"></Card>
                </CardGroup>
                
             
            </Row>
          </Col>
        </Row>
      </Container>
      
    </div>
     
  )
  }


export default Home;
