import { useEffect, useState } from 'react';
import './App.css';

import { SomeInterface, User } from '@libs/typings';
import { Routes, Route } from 'react-router-dom';
import NewGame from './pages/NewGame';

function App() {
  const [someData, setSomeData] = useState<SomeInterface>({
    someProperty: 'someValue',
  });

  const user: Partial<User> = {};

  useEffect(() => {
    const abortController = new AbortController();
    const go = async () => {
      const response = await fetch(`/api/some-route`, {
        signal: abortController.signal,
      });
      const data = await response.json();
      setSomeData(data);
    };

    go();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <Routes>
        <Route path="/new-game" element={<NewGame />} />
        <Route
          path="*"
          element={<div className="App">{`${someData.someProperty}`}</div>}
        />
      </Routes>
    </>
  );
}

export default App;
