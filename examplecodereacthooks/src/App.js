import React from "react"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Count from "./components/countexample";
import Home from "./components/Home";
import UseEffectData from "./components/useEffects";  
import UseCallbackFunction from "./components/UseCallbaback";
import UseMemo from "./components/UseMemo";
import ParentComponent from './components/ForwordRef'
import OptimizedComponent from "./components/OptimisingPerformence";
import Lazy from "./components/ReactLazy";
import Clock from './components/LifecyleMethods'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/count" element={<Count/>} />
        <Route path="/useeffectdata" element={<UseEffectData />} /> 
        <Route path="/usecallbackfunction" element={<UseCallbackFunction />} />
        <Route path="/usememo" element={<UseMemo />} />
        <Route path="/parentcomponent" element={<ParentComponent />} />
        <Route path="/optimizedComponent" element={<OptimizedComponent />} />
        <Route path="/lazy" element={<Lazy />} />
        <Route path='/clock' element = {<Clock />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
