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
import Layout from "./layout/layout";
import Xyz from "./pages/Xyz";

function App() {
  // const [count, setCount] = useState(0)
  // const [loading, setLoading] = useState(false)
  // const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <BrowserRouter>
    <Layout>
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
        <Route path="/xyz" element={<Xyz/>} />
   {/* if entered anything else after / which are not present in the route then this will be redirect to the "/" route which will be the login */}
        <Route path="/*" element={<Navigate to="/Page404" />} />
      </Routes>
      </Layout>
    </BrowserRouter>
    // <FormModal/>
  );
}

export default App;
