import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import Navbar from './Components/Navbar'
import Login from './Components/Login'


function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // return (
  //   <>
  //   <Navbar/>

  //   <Login/>
      
  //   </>
  // )

  return loading ? (
    // <Loader />
    <div>Loading...</div>
  ) : (
    <BrowserRouter>
      <Routes>
        {!isAuthenticated && <Route path="/" element={<Login/>} />}

        {/* {isAuthenticated && (
          <Route path="/" element={<MainlLayout />}>
            <Route index element={<IndexDashBoard />} />
            <Route path="LiveChats" element={<IndexLiveChats />} />
            <Route path="BotChats" element={<IndexBotChats />} />
            <Route path="SelectBotChats" element={<SelectBotChats />} />
            <Route path="BotIndex" element={<BotIndex />} />
            <Route path="Bot1" element={<Bot1 />} />
            <Route path="Botchat1" element={<ChatWindow />} />
            <Route path="Botchat2" element={<ChatWindow />} />
            <Route path="Botchat3" element={<ChatWindow />} />
            <Route path="CreateBot" element={<CreateBot />} />
          </Route>
        )} */}

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App
