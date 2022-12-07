import { useEffect, useState } from 'react';
import './App.css';
import { SomeInterface, User } from '@libs/typings';
import Overview from './pages/Overview';

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

  return <div className="App">
    {/* {`${someData.someProperty}`} */}
    <Overview />
    </div>;
}

export default App;
