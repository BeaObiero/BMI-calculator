import React from 'react';
import { UserProvider } from './UserContext';
import NameDisplay from './components/NameDisplay';
import AgeDisplay from './components/AgeDisplay';
import BmiDisplay from './components/BmiDisplay';

const App = () => {
  return (
    <UserProvider>
      <div>
        <NameDisplay />
        <AgeDisplay />
        <BmiDisplay />
      </div>
    </UserProvider>
  );
};

export default App;
