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
import Forge from './pages/Forge';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/new-game" element={<NewGame />} />
        <Route path="/game/overview" element={<Overview />} />
        <Route path="/game/:room" element={<Room />} />
        <Route path="/game-settings" element={<GameSettings />} />
        <Route path="/account-settings" element={<AccountSettings />} />
        <Route path="/about" element={<About />} />
        <Route path="/assistance" element={<Assistance />} />
        <Route path="/forge" element={<Forge />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default App;
