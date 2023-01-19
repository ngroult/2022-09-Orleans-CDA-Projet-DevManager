import { useContext, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

const Protected = ({ children }: { children: ReactNode }) => {
  const { user } = useContext(AuthContext);
  if (!user) {
    return <Navigate to={'/login'} />;
  }
  return <>{children}</>;
};

export default Protected;
