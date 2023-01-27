import { useContext, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

const Protected = ({ children }: { children: ReactNode }) => {
  const { user, isLoadingUser } = useContext(AuthContext);
  if (isLoadingUser) {
    return <>ca charge</>;
  }
  if (!user) {
    return <Navigate to={'/login'} />;
  }
  return <>{children}</>;
};

export default Protected;
