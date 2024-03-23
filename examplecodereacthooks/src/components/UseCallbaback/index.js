import {useState,useCallback}  from 'react' 
import { Link } from 'react-router-dom'
import './index.css'

function UseCallbackFunction(){
      const [count, setCount] = useState(0)

    const  usecallabckhandleclick = ()=> {
        console.log("button Click")
        setCount(count+1)
      }

      const memoizedHandleClick = useCallback(usecallabckhandleclick,[count])

    return(
        <div className="container1">
            <h1 style={{color:'red',fontSize:"40px"}}>Hello UseCallbackFunction</h1>
            <p style={{color:'red',fontSize:"40px"}}>count :{count}</p>
            <button style={{color:'red', backgroundColor:'green' ,height:'40px',width:"80px",borderRadius:"8px",border:"none", margin:"30px"}} type='button' onClick={memoizedHandleClick}>Count</button>
            <Link to='/Home'><button style={{color:'red', backgroundColor:'green' ,height:'40px',width:"80px",borderRadius:"8px",border:"none", margin:"30px"}}>Home</button></Link>
        </div>
    )
}

export default UseCallbackFunction