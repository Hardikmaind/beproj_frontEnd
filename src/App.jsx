import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import LandingPage from './pages/LandingPage';
import AfterloginDashboard from './pages/AfterloginDashboard';


function App() {
  // const [count, setCount] = useState(0)
  // const [loading, setLoading] = useState(false)
  // const [isAuthenticated, setIsAuthenticated] = useState(false)



  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<LandingPage/>} />
         <Route path="/Dashboard" element={<AfterloginDashboard/>}/>
    

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
