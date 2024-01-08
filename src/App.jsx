import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, Form } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import LandingPage from "./pages/LandingPage";
import AfterloginDashboard from "./pages/AfterloginDashboard";
import FormModal from "./Components/FormModal";
import ProtectedRoute from "./routes/Protected";
import Page404 from "./pages/Page404";

function App() {
  // const [count, setCount] = useState(0)
  // const [loading, setLoading] = useState(false)
  // const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Page404" element={<Page404 />} />
        <Route
          path="/Dashboard"
          replace
          element={
            <ProtectedRoute>
              <AfterloginDashboard />
            </ProtectedRoute>
          }
        />
{/* if entered anything else after / which are not present in the route then this will be redirect to the "/" route which will be the login */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
    // <FormModal/>
  );
}

export default App;
