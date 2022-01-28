import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import card from './card';


function App(props) {

  return (
    <>
    <h1>Total Price: {props.price}</h1>
    </>
    
  );
}

export default App;