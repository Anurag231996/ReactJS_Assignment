import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';
import data from './data';
import './index.css';

// console.log(data[0]);
function ncard(val){
return(
<Card
    key={val.id}
    src={val.imgsrc}
    name={val.name}
    des={val.des}
    />
);
}

ReactDOM.render(
  <>
    <h1 className='heading_style'>Heading</h1>
    {data.map(ncard)}
  </>
   ,
  document.getElementById('root')
);