import { User } from '@apps/backend-api';
import { createContext, useState, useMemo, ReactNode, useEffect } from 'react';

const AuthContext = createContext<{
  user?: User | null;
  setUser: (user: User | null) => void;
  isLoadingUser: boolean;
  setIsLoadingUser: (value: boolean) => void;
}>({
  user: null,
  setUser: () => {},
  isLoadingUser: true,
  setIsLoadingUser: () => {},
});

const AuthProvider = (props: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoadingUser, setIsLoadingUser] = useState<boolean>(true);

  useEffect(() => {
    if (user) {
      setIsLoadingUser(false);
    }
  }, [user]);

  const value = useMemo(
    () => ({ user, setUser, isLoadingUser, setIsLoadingUser }),
    [user, setUser, isLoadingUser, setIsLoadingUser]
  );

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContext;
export { AuthProvider };
