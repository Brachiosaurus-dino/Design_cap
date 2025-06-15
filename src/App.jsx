import React from "react";
import './index.css'
import Home from "./pages/home";
import { Route ,Routes } from "react-router-dom";
import Detail from "./pages/detail";


const App = () => {
  return (
    <div>
        
  
        
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path ="/detail" element={<Detail/>}></Route>
        </Routes>
        
    </div>
  )
}

export default App
