import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';
import data from './data';
import './index.css';
import App from './App';


ReactDOM.render(
  <>

    <h1 className='heading_style'>Products List</h1>
    <App 
      price={Card.total}
    />

    {data.map((val, index) => {
      return (
        <Card
          key={val.id}
          src={val.imgsrc}
          name={val.name}
          des={val.des}
          price={val.price}
        />
      );
    })}
    
  </> 
  ,
  document.getElementById('root')
);