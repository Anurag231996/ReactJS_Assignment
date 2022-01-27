import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Card from './Card';


function App(props) {

  return (
    <>
    <h1>Total Price: {props.total}</h1>
    </>
    
  );
}

export default App;
