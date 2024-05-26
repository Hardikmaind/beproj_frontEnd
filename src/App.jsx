// // App.jsx
// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import "./App.css";
// import LandingPage from "./pages/LandingPage";
// import AfterloginDashboard from "./pages/AfterloginDashboard";
// import Page404 from "./pages/Page404";
// import Layout from "./layout/layout";
// // import Xyz from "./pages/Interview123";
// import { useAuth } from "./context/AuthContext"; // Assuming you have an AuthContext
// import Techincal from "./pages/Interview/Technical";
// import HR from "./pages/Interview/HR";
// import Result from "./pages/Result";
// import AudioRecorder from "./Components/AudioRecorderMain";
// import { Toaster, toast } from 'sonner'





import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { useAuth } from "./context/AuthContext"; // Assuming you have an AuthContext
import { Toaster } from 'sonner';

// Lazy load components
const LandingPage = lazy(() => import("./pages/LandingPage"));
const AfterloginDashboard = lazy(() => import("./pages/AfterloginDashboard"));
const Page404 = lazy(() => import("./pages/Page404"));
const Layout = lazy(() => import("./layout/layout"));
const Technical = lazy(() => import("./pages/Interview/Technical"));
const HR = lazy(() => import("./pages/Interview/HR"));
const Result = lazy(() => import("./pages/Result"));
const AudioRecorder = lazy(() => import("./Components/AudioRecorderMain"));


function App() {
  const auth = useAuth();
  console.log("Is Authenticated:", auth.isAuthenticated);

  return (
    <BrowserRouter>
    <Toaster position="top-center"  richColors  />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Page404" element={<Page404 />} />

        {auth.isAuthenticated ? (
          // If authenticated, show the Layout with protected routes
          <Route path="/*" element={<Layout />}>
            <Route index element={<AfterloginDashboard />} />
            <Route path="Technical-Interview" element={<Technical />} />
            <Route path="HR-Interview" element={<HR />} />
            <Route path="Result" element={<Result/>} />
            <Route path="Audio" element={<AudioRecorder/>} />
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
