import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import NewGame from './pages/NewGame';
import Overview from './pages/Overview';
import RoomPage from './pages/RoomPage';
import GameSettings from './pages/GameSettings';
import AccountSettings from './pages/AccountSettings';
import About from './pages/About';
import Assistance from './pages/Assistance';
import Page404 from './pages/Page404';
import Leaderboard from './pages/Leaderboard';
import AuthContext from './contexts/AuthContext';
import { useContext, useEffect } from 'react';
import Protected from './components/Protected';

const App = () => {
  const { setUser } = useContext(AuthContext);

  useEffect(() => {
    const abortController = new AbortController();
    const userLogin = async () => {
      try {
        const userLogged = await fetch('/api/auth/me', {
          method: 'GET',
          signal: abortController.signal,
        });

        const jsonResponse = await userLogged.json();

        if (jsonResponse.message !== 'Unauthorized') {
          setUser(jsonResponse);
        }
      } catch (err) {
        console.error(err);
      }
    };
    userLogin();
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/login" element={<Login />} />
<<<<<<< HEAD
        <Route path="/new-game" element={<NewGame />} />
        <Route path="/game/overview" element={<Overview />} />
        <Route path="/game/:label" element={<RoomPage />} />
        <Route path="/game-settings" element={<GameSettings />} />
        <Route path="/account-settings" element={<AccountSettings />} />
=======
        <Route
          path="/new-game"
          element={
            <Protected>
              <NewGame />
            </Protected>
          }
        />
        <Route
          path="/game/overview"
          element={
            <Protected>
              <Overview />
            </Protected>
          }
        />
        <Route
          path="/game/:room"
          element={
            <Protected>
              <Room />
            </Protected>
          }
        />
        <Route
          path="/game-settings"
          element={
            <Protected>
              <GameSettings />
            </Protected>
          }
        />
        <Route
          path="/account-settings"
          element={
            <Protected>
              <AccountSettings />
            </Protected>
          }
        />
>>>>>>> 03da2346d9eaae974d547720d72c8b8f1cfeca6e
        <Route path="/about" element={<About />} />
        <Route path="/assistance" element={<Assistance />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default App;
