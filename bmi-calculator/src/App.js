import React from 'react';
import { UserProvider } from './UserContext';
import NameDisplay from './NameDisplay';
import AgeDisplay from './AgeDisplay';
import BmiDisplay from './BmiDisplay';

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
