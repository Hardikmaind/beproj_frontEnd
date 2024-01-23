// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import AfterloginDashboard from "./pages/AfterloginDashboard";
import Page404 from "./pages/Page404";
import Layout from "./layout/layout";
// import Xyz from "./pages/Interview123";
import { useAuth } from "./context/AuthContext"; // Assuming you have an AuthContext
import Techincal from "./pages/Interview/Technical";
import HR from "./pages/Interview/HR";
import Feedback from "./pages/Feedback";


function App() {
  const auth = useAuth();
  console.log("Is Authenticated:", auth.isAuthenticated);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Page404" element={<Page404 />} />

        {auth.isAuthenticated ? (
          // If authenticated, show the Layout with protected routes
          <Route path="/*" element={<Layout />}>
            <Route index element={<AfterloginDashboard />} />
            <Route path="Technical-Interview" element={<Techincal />} />
            <Route path="HR-Interview" element={<HR />} />
            <Route path="feedback" element={<Feedback/>} />
            <Route path="*" element={<Page404 />} />
          </Route>
        ) : (
          // If not authenticated, redirect to the LandingPage
          <Route path="" element={<Navigate to="/" />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
