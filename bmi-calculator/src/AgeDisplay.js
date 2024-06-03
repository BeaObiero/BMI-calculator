import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const AgeDisplay = () => {
  const context = useContext(UserContext); //access the `userContext`

  if (!context) { //if the context is null or undefined, the context hasnt been provided yet
    return <div>Loading...</div>;
  }

  const { user, loading, error } = context; //destructure the `user`, `loading` and `error` properties from context
//const {user, loading,error } = useContext(UserContext) || {}; ensures that if it return null or undefined, we dont encounter destructuring errors
  if (loading) return <div>Loading...</div>;                //the rightside `{}` will be a fallback value of an empty object,avoiding runtime errors
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user data available</div>;

  return <div>Age: {user.age}</div>; //if none of these conditions are met we have data and age is displayed
};

export default AgeDisplay;


//Possible Improvements

/**
 * Improve Error Handling:

*Provide more specific error messages or actions to take when an error occurs.
Destructuring Context:

*Destructure the context directly when using useContext to make the code cleaner.
Optional Chaining:

Use optional chaining to handle cases where properties might be undefined.
 */