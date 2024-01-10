// import { useState } from "react";
// import { BrowserRouter, Routes, Route, Navigate, Form } from "react-router-dom";
// import "./App.css";
// import Navbar from "./Components/Navbar";
// import Login from "./Components/Login";
// import LandingPage from "./pages/LandingPage";
// import AfterloginDashboard from "./pages/AfterloginDashboard";
// import FormModal from "./Components/FormModal";
// import ProtectedRoute from "./routes/Protected";
// import Page404 from "./pages/Page404";
// import Layout from "./layout/layout";
// import Xyz from "./pages/Xyz";

// function App() {
//   // const [count, setCount] = useState(0)
//   // const [loading, setLoading] = useState(false)
//   // const [isAuthenticated, setIsAuthenticated] = useState(false)

//   return (
//     <BrowserRouter>
//       {/* <Layout> */}
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/Page404" element={<Page404 />} />
//         {/* <ProtectedRoute> */}
//         <Route path="/*" element={<Layout />}>
//           <Route path="Dashboard" replace element={<AfterloginDashboard />} />
//           <Route path="xyz" element={<Xyz />} />

//           {/* if entered anything else after / which are not present in the route then this will be redirect to the "/" route which will be the login */}
//         <Route path="*" element={<Navigate to="/Page404" />} />
//         </Route>
//         {/* </ProtectedRoute> */}
//       </Routes>
//       {/* </Layout> */}
//     </BrowserRouter>
//     // <FormModal/>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import "./App.css";
// import LandingPage from "./pages/LandingPage";
// import AfterloginDashboard from "./pages/AfterloginDashboard";
// import Page404 from "./pages/Page404";
// import Layout from "./layout/layout";
// import Xyz from "./pages/Xyz";
// import { useAuth } from "./context/AuthContext"; // Assuming you have an AuthContext

// function App() {
//   const auth = useAuth();

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/Page404" element={<Page404 />} />
//         <Route
//           path="/*"
//           element={
//             auth.isAuthenticated ? (
//               <Layout>
//                 <Route path="Dashboard" element={<AfterloginDashboard />} />
//                 <Route path="xyz" element={<Xyz />} />
//               </Layout>
//             ) : (
//               <Navigate to="/" replace />
//             )
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// // App.jsx
// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import "./App.css";
// import LandingPage from "./pages/LandingPage";
// import AfterloginDashboard from "./pages/AfterloginDashboard";
// import Page404 from "./pages/Page404";
// import Layout from "./layout/layout";
// import Xyz from "./pages/Xyz";
// import { useAuth } from "./context/AuthContext"; // Assuming you have an AuthContext

// function App() {
//   const auth = useAuth();

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/Page404" element={<Page404 />} />
//         {auth.isAuthenticated ? (
//           // If authenticated, show the Layout with protected routes
//           <Route
//             path="/*"
//             element={
//               <Layout>
//                 <Route path="Dashboard" element={<AfterloginDashboard />} />
//                 <Route path="xyz" element={<Xyz />} />
//               </Layout>
//             }
//           />
//         ) : (
//           // If not authenticated, redirect to the LandingPage
//           <Route path="/*" element={<Navigate to="/" />} />
//         )}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import AfterloginDashboard from "./pages/AfterloginDashboard";
import Page404 from "./pages/Page404";
import Layout from "./layout/layout";
import Xyz from "./pages/Xyz";
import { useAuth } from "./context/AuthContext"; // Assuming you have an AuthContext

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
            <Route path="xyz" element={<Xyz />} />
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
