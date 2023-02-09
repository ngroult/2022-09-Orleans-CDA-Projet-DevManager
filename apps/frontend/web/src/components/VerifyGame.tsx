import { useContext, ReactNode, useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

const VerifyGame = ({
  children,
  gameRequired,
}: {
  children: ReactNode;
  gameRequired: boolean;
}) => {
  const { user, isLoadingUser } = useContext(AuthContext);

  const [game, setGame] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const abortController = new AbortController();

    fetch(`/api/games/verify/${user?.id}`, {
      method: 'GET',
      signal: abortController.signal,
    })
      .then((data) => data.json())
      .then((data) => {
        setGame(data.count);
        setIsLoading(false);
      });
    return () => {
      abortController.abort();
    };
  }, [user]);

  if (isLoading) {
    return null;
  }
  if (game && !gameRequired) {
    return <Navigate to={'/game/overview'} />;
  } else if (!game && gameRequired) {
    return <Navigate to={'/new-game'} />;
  }
  return <>{children}</>;
};

export default VerifyGame;
