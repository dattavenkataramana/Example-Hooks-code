import {useState,useMemo}  from 'react' 
import { Link } from 'react-router-dom'
import './index.css'

function  UseMemo(){
      const [count, setCount] = useState(1)
       

    const  usecallabckhandleclick = () => {
         setCount(count+1)

      }

   let num1 = 30
   let num2 = 30

   let  sum = useMemo(()=>{
        return num1+num2
        
      },[num1,num2])



    return(
        <div className="container1">
            <h1 style={{color:'red',fontSize:"40px"}}>Hello UseCallbackFunction</h1>
            <p style={{color:'red',fontSize:"40px"}}>State count :{count}</p> 
            <p style={{color:'red',fontSize:"40px"}}>useMemo count :{sum}</p> 
            <button style={{color:'red', backgroundColor:'green' ,height:'40px',width:"80px",borderRadius:"8px",border:"none", margin:"30px"}} type='button' onClick={usecallabckhandleclick}>Count</button>
            <Link to='/Home'><button style={{color:'red', backgroundColor:'green' ,height:'40px',width:"80px",borderRadius:"8px",border:"none", margin:"30px"}}>Home</button></Link>
        </div>
    )
}

export default  UseMemo