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

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/new-game" element={<NewGame />} />
        <Route path="/game/overview" element={<Overview />} />
        <Route path="/game/:label" element={<RoomPage />} />
        <Route path="/game-settings" element={<GameSettings />} />
        <Route path="/account-settings" element={<AccountSettings />} />
        <Route path="/about" element={<About />} />
        <Route path="/assistance" element={<Assistance />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default App;
