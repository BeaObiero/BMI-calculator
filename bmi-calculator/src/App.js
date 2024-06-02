import React from 'react';
import { UserProvider } from './UserContext';
import NameDisplay from './NameDisplay';
import AgeDisplay from './AgeDisplay';
import BmiDisplay from './BmiDisplay';
import BmiCalculator from './BmiCalculator';

const App = () => {
  return (
    <UserProvider>
      <div>
        <NameDisplay />
        <AgeDisplay />
        <BmiDisplay />
        <BmiCalculator />
      </div>
    </UserProvider>
  );
};

export default App;
