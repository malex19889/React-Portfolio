import React from "react";

function PortItem(props){
    return(
        <div class="col-md-4">
              <a href={props.imglink} target="_self"><img src={props.img} class="img-fluid" alt={props.alt}/></a>
              <a class="portLink" href={props.deployed}><h4>{props.name}</h4></a>
        </div>
    )
}

export default PortItem;