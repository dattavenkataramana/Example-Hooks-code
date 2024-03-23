import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css'
const fetchData = async () => {
   
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
      ]);
    }, 1000);
  });
};

const OptimizedComponent = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      try {
        const newData = await fetchData();
        setData(newData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataAndSetState();
  }, []);  

  return (
    <div className="container1">
      {isLoading ? (
        <p style={{listStyleType:"none",color:'yellow'}}>Loading...</p>
      ) : (
        <ul style={{listStyleType:"none",color:'yellow'}}>
          {data.map(item => (
            <li style={{listStyleType:"none",color:'yellow'}} key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
      <Link to='/Home'><button style={{color:'red', backgroundColor:'green' ,height:'40px',width:"80px",borderRadius:"8px",border:"none", margin:"30px"}}>Home</button></Link>
    </div>
  );
};

export default OptimizedComponent;
