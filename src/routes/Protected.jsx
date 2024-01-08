import { useNavigate } from 'react-router-dom';

import useAuth from "../hooks/useAuth";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
    const auth = useAuth(); // Assuming you have a useAuth hook to check authentication
  
    return auth.isAuthenticated ? (
      children
    ) : (
      navigate('/Page404',{ replace: true } ) // Redirect to protected route
    );
  }
  
  export default ProtectedRoute;