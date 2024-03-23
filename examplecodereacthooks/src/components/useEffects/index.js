import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './index.css'
const  UseEffectData= () => {
  const [count, setCount] = useState(0);

  // useEffect with an empty dependency array, it runs only once after the component mounts
  useEffect(() => {
    console.log('Component mounted');
  // Cleanup function, this will run before the component unmounts
    return () => {
      console.log('Component will unmount');
    };
  }, []);

  // useEffect with count as dependency, it runs every time count changes
  useEffect(() => {
    console.log('Count value changed:', count);
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="container1">
      <h1>Count: {count}</h1>
      <button style={{color:'red', backgroundColor:'green' ,height:'40px',width:"80px",borderRadius:"8px",border:"none", margin:"30px"}} onClick={increment}>Increment</button>
      <Link to='/Home'><button style={{color:'red', backgroundColor:'green' ,height:'40px',width:"80px",borderRadius:"8px",border:"none", margin:"30px"}}>Home</button></Link>
    </div>
  );
};

export default  UseEffectData
 