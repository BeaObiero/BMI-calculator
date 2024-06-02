import React, { useContext } from 'react';
import { UserContext } from './UserContext'; // Adjust the import path as needed

const BmiDisplay = () => {
  const context = useContext(UserContext);

  if (!context) {
    return <div>Loading...</div>;
  }

  const { user, loading, error } = context;

  const calculateBMI = (height, weight) => {
    return (weight / (height * height)).toFixed(2);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user data available</div>;

  const bmi = calculateBMI(user.height, user.weight);

  return <div>BMI: {bmi}</div>;
};

export default BmiDisplay;
