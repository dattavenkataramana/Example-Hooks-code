import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './componets/Login'
import SignUp from './componets/SignUp'

import './App.css';

function App() { 
  return(
     <BrowserRouter>
     <Routes> 
         <Route path="/" element={<Login/>}></Route>
         <Route path="/signup" element={<SignUp/>}></Route>
      </Routes>
     </BrowserRouter>
  )
}

export default App;
