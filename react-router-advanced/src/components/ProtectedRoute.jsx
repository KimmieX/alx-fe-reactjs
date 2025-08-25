import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  return localStorage.getItem('auth') === 'true'; // Simulated auth
};

function ProtectedRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/" />;
}

export default function ProtectedRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
}

