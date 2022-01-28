import React, { useState } from "react";
import App from "./App";
function Card(props) {

  const [num, setNum] = useState(0);
  const [total, setTotal] = useState(0)

  const add = () => {
    setNum(num + 1);
    setTotal(total+props.price);
    
    console.log(total);
  }
  const rem = () => {
    if (num > 0) {
      setNum(num - 1);
      setTotal(total-props.price);
    } else {
      setNum(0);
    }

  }
  const fun =()=>{
      return(
<>{total}
</>
      );
  }

  return (
    <>
    <div className='cards'>
      <div className='card'>
        <h1 className="mh">Price: {props.price}</h1>
        <img src={props.src}
          alt="mypic"
          className="card_img" />
        <div className="card_info">
          <span className='card_category'></span>
          <h3 className='title'>{props.name}</h3>
          <h3 className='des'>{props.des}</h3>
          <button onClick={add}>Add to cart</button>
          <h1>{num}</h1>
          <button onClick={rem}>Remove from cart</button>
          
        </div>
      </div>
    </div>
    </>
  );
}
export default Card;