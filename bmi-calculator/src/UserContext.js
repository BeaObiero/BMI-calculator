import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext(); //UserContext will be used to share data between components

export const UserProvider = ({ children }) => { //function used to update user
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/API/user.json')
      .then(response => {
        if (!response.ok) { //fetches data from the provided URL
          throw new Error('Network response was not ok');//checks if response is okay
        }
        return response.json();
      })
      .then(data => {
        setUser(data);//if data is okay it updates teh user state with this data
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false); //accurately reflects the data-fetching state
      });
  }, []); //used only once when the component mounts

  return (
    <UserContext.Provider value={{ user, loading, error }}> {/** takes the 'value" prop that provides the following state to any component that consumes this context */}
      {children} {/**wraps around any children componets, allowing access to data */}
    </UserContext.Provider>
  );
}; //wraps around any child component, so that any component inside 'User Provider' can access
//the user data


//## Possible improvements

//Separate Fetch Logic

/**
 * const fetchUserData = async () => {
  try {
    const response = await fetch('/API/user.json');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    setUser(data);
    setLoading(false);
  } catch (error) {
    setError(error.message);
    setLoading(false);
  }
};
Extracts fetch logic into a separate function thus making it cleaner
 */