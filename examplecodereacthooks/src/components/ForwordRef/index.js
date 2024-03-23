import { useRef,forwardRef } from "react";
import { Link } from "react-router-dom";
import './index.css'
const ChildComponent = forwardRef((props,ref)=>{
    return <input ref={ref} placeholder="useRef works"/>
})


const ParentComponent = () => {
    const inputRef = useRef()

    const focusInput = ()=>{
        inputRef.current.focus()
    }

    return (
        <div  className="container1">
            <ChildComponent ref={inputRef} />
            <button style={{color:'red', backgroundColor:'green' ,height:'40px',width:"80px",borderRadius:"8px",border:"none", margin:"30px"}} type="button" onClick={focusInput}>Focus Input</button>
            <Link to='/Home'><button style={{color:'red', backgroundColor:'green' ,height:'40px',width:"80px",borderRadius:"8px",border:"none", margin:"30px"}}>Home</button></Link>
        </div>
    )
}


export default ParentComponent