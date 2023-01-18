import { User } from '@apps/backend-api';
import { createContext, useState, useMemo } from 'react';

const AuthContext = createContext<{
  user?: User;
  setUser: (user: User) => void;
}>({ user: undefined, setUser: () => {} });

const AuthProvider = (props: any) => {
  const [user, setUser] = useState<User>();

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContext;
export { AuthProvider };
