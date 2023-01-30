import { User } from '@apps/backend-api';
import { createContext, useState, useMemo, ReactNode, useEffect } from 'react';

const AuthContext = createContext<{
  user?: User;
  setUser: (user: User) => void;
  isLoadingUser: boolean;
  setIsLoadingUser: (value: boolean) => void;
}>({
  user: undefined,
  setUser: () => {},
  isLoadingUser: true,
  setIsLoadingUser: () => {},
});

const AuthProvider = (props: { children: ReactNode }) => {
  const [user, setUser] = useState<User>();
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
