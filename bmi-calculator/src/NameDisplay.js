import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const NameDisplay = () => {
  const context = useContext(UserContext);

  if (!context) {
    return <div>Loading...</div>;
  }

  const { user, loading, error } = context;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <div>Name: {user.name}</div>;
};

export default NameDisplay;
