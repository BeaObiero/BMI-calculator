import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const BmiDisplay = () => {
  const user = useContext(UserContext);

  const calculateBMI = (height, weight) => {
    if (height > 0) {
      return (weight / (height * height)).toFixed(2);
    }
    return 0;
  };

  return (
    <div>
      {user ? (
        <p>BMI: {calculateBMI(user.height, user.weight)}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BmiDisplay;
