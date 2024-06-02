import React, { useContext } from 'react';
import { UserContext } from './UserContext'; 

function BmiDisplay () {
  const context = useContext(UserContext); 

  if (!context) {
    return <div>Loading...</div>;
  }

  const { user, loading, error } = context; //extracts user,loading and error from context

  const calculateBMI = (height, weight) => {
    return (weight / (height * height)).toFixed(2);
  };

   //conditional rendering that handles the loading,error and user data states
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user data available</div>;

  const bmi = calculateBMI(user.height, user.weight);

  return <div>BMI: {bmi}</div>;
}

export default BmiDisplay;
