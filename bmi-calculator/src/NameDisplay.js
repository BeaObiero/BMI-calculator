import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const NameDisplay = () => {
  const user = useContext(UserContext);

  return (
    <div>
      {user ? <p>Name: {user.name}</p> : <p>Loading...</p>}
    </div>
  );
};

export default NameDisplay;
