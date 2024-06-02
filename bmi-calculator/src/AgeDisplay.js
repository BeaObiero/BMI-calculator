import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const AgeDisplay = () => {
  const user = useContext(UserContext);

  return (
    <div>
      {user ? <p>Age: {user.age}</p> : <p>Loading...</p>}
    </div>
  );
};

export default AgeDisplay;
