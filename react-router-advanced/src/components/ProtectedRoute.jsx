import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const isAuthenticated = () => {
  return localStorage.getItem('auth') === 'true'; // Simulated auth
};

function ProtectedRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/" />;
}

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}


