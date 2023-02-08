import { useContext, ReactNode, useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

const VerifyGame = ({
  children,
  needAGame,
}: {
  children: ReactNode;
  needAGame: boolean;
}) => {
  const { user, isLoadingUser } = useContext(AuthContext);
  const location = useLocation();
  if (isLoadingUser) {
    return null;
  }

  const [game, setGame] = useState<any>([]);

  useEffect(() => {
    const abortController = new AbortController();

    fetch(`/api/games/verify/${user?.id}`, {
      method: 'GET',
      signal: abortController.signal,
    })
      .then((data) => data.json())
      .then((data) => {
        setGame(data);
      });
    return () => {
      abortController.abort();
    };
  }, [user]);

  if (game! && !needAGame) {
    return (
      <Navigate
        to={'/game/overview'}
        state={{ redirectTo: location.pathname }}
      />
    );
  } else if (!game && needAGame) {
    return null;
  }
  return <>{children}</>;
};

export default VerifyGame;
