import { useState } from "react";
import { Link } from "react-router-dom";
import './index.css'

function Count(){
   const [count,setCount] = useState(0)
     const handleclick = ()=>{
        if((count+1)%6 === 0){
            setCount(0)
        }else{
            setCount(count+1)
        }
     }
    return(
        <div className="con"> 
             <p style={{color:'red',fontSize:"40px"}}>Count : {count}</p>
             <button  style={{color:'red', backgroundColor:'green' ,height:'40px',width:"80px",borderRadius:"8px",border:"none"}}  onClick={handleclick}>Click</button> 
             <Link to='/Home'><button style={{color:'red', backgroundColor:'green' ,height:'40px',width:"80px",borderRadius:"8px",border:"none", margin:"30px"}}>Home</button></Link>
        </div> 
    )
}

export default Count;