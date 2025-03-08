import React from 'react'
import { useState, useEffect } from 'react'
import Hero from "../components/hero/Hero";
import Category from "../components/category/Category";

const App = () => {
  const [mensaje, setMensaje] = useState('');

  useEffect(()=>{


    fetch('http://localhost:8080')
          .then((response) => response.json())
          .then((data) => setMensaje(data))
          .catch((error) => console.error('Error:', error));
    
  },[])  

  return (
    <div>
      <h1>{mensaje}</h1>
      <Hero />
      <Category />
    </div>
  );
};

export default App;
