import React from "react";

function Jumbotron(props){
    return(
        
        <div className="jumbotron jumbotron-fluid rowbgc">
                <div className="container">
                  <h1 className="display-4">{props.title}</h1>
                  <p className="lead">{props.leadst}<a class="portLink" href={props.href} >{props.leadlink}</a>{props.leadend}</p>
                </div>
        </div>   
    );
}

export default Jumbotron;