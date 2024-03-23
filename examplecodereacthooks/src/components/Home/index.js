import React from "react";
import { Link } from "react-router-dom";
import './index.css'


function Home(){

    return(
        <div className="container1">
            <Link className="link" to="/count"><p style={{fontSize:"20px", color:"red"}}>Counter Example</p></Link>
            <Link className="link" to="/useeffectdata"><p style={{fontSize:"20px",color:'red'}}>useEffect Example</p></Link>
            <Link className="link" to="/usecallbackfunction"><p style={{fontSize:"20px",color:'red'}}>UseCallbackFunction Example</p></Link>
            <Link className="link" to="/usememo"><p style={{fontSize:"20px",color:'red'}}>UseMemo Example</p></Link>
            <Link className="link" to="/ParentComponent"><p style={{fontSize:"20px",color:'red'}}>ForwordRef Example</p></Link>
            <Link className="link" to="/optimizedComponent"><p style={{fontSize:"20px",color:'red'}}>optimizedComponent Example</p></Link>              
        </div>
    )
}

export default Home