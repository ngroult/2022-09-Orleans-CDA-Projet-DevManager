import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import NewGame from './pages/NewGame';
import Overview from './pages/Overview';
import Room from './pages/Room';
import GameSettings from './pages/GameSettings';
import AccountSettings from './pages/AccountSettings';
import About from './pages/About';
import Assistance from './pages/Assistance';
import Page404 from './pages/Page404';
import Leaderboard from './pages/Leaderboard';
import AuthContext from './contexts/AuthContext';
import { useContext, useEffect } from 'react';
import Protected from './components/Protected';
import { Box, useDisclosure } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';
import DrawerNavbar from './components/popups/DrawerNavbar';
import ResourcesBar from './components/ResourcesBar';
import NavbarRooms from './components/NavbarRooms';
import MobileNavbarRooms from './components/MobileNavbarRooms';
import GameFrame from './components/GameFrame';

const App = () => {
  const { user, setUser, setIsLoadingUser } = useContext(AuthContext);

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
        } else {
          setIsLoadingUser(false);
        }
      } catch (err) {}
    };

    userLogin();
    return () => {
      abortController.abort();
    };
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    fetch('/api/games/id', {
      method: 'GET',
      signal: abortController.signal,
    });

    return () => {
      abortController.abort();
    };
  }, [user]);

  return (
    <Box h="100vh">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/leaderboard"
          element={
            <>
              <Navbar />
              <MobileNavbar />
              <Leaderboard />
            </>
          }
        />
        <Route
          path="/new-game"
          element={
            <Protected>
              <Navbar />
              <MobileNavbar />
              <NewGame />
            </Protected>
          }
        />
        <Route
          path="/game/overview"
          element={
            <Protected>
              <Navbar />
              <MobileNavbar />
              <Overview />
              <MobileNavbarRooms />
            </Protected>
          }
        />
        <Route
          path="/game/:label"
          element={
            <Protected>
              <Navbar />
              <ResourcesBar />
              <MobileNavbar />
              <Room />
              <NavbarRooms />
              <MobileNavbarRooms />
            </Protected>
          }
        />
        <Route
          path="/game-settings"
          element={
            <Protected>
              <Navbar />
              <MobileNavbar />
              <GameSettings />
            </Protected>
          }
        />
        <Route
          path="/account-settings"
          element={
            <Protected>
              <Navbar />
              <MobileNavbar />
              <AccountSettings />
            </Protected>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <MobileNavbar />
              <About />
            </>
          }
        />
        <Route
          path="/assistance"
          element={
            <>
              <Navbar />
              <MobileNavbar />
              <Assistance />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <MobileNavbar />
              <Page404 />
            </>
          }
        />
        <Route path="/game-frame" element={<GameFrame />} />
      </Routes>
    </Box>
  );
};

export default App;
