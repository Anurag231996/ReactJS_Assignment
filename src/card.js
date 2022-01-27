import React from "react";

function myFunction() {
  document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}
function card(props){
  const clicked="true";
    return(
        <div className='cards'>
        <div className='card'>
          <img src={props.src}
           alt="mypic"
           className="card_img" />
          <div className="card_info">
            <span className='card_category'></span>
            <h3 className='title'>{props.name}</h3>
            <h3 className='des'>{props.des}</h3>
            <a target="_blank">
              <button id="but" onClick="myFunction()">Add to cart</button>
            </a>
          </div>
        </div>
      </div>
    );
}
export default card;