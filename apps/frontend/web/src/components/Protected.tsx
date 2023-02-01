import { useContext, ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

const Protected = ({ children }: { children: ReactNode }) => {
  const { user, isLoadingUser } = useContext(AuthContext);
  if (isLoadingUser) {
    return null;
  }

  const location = useLocation();

  if (!user) {
    return <Navigate to={'/login'} state={{ redirectTo: location.pathname }} />;
  }
  return <>{children}</>;
};

export default Protected;
